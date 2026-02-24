document.addEventListener("DOMContentLoaded", function () {

  const filterButtons = document.querySelectorAll(".filter-btn");
  const totalCount = document.getElementById("totalCount");
  const interviewCount = document.getElementById("interviewCount");
  const rejectedCount = document.getElementById("rejectedCount");
  const emptyMessage = document.getElementById("emptyMessage");
  const jobStatusText = document.getElementById("jobStatusRight");

  const initialTotal = document.querySelectorAll(".job-card").length;
  let currentFilter = "all";  
  let actionTaken = false;   

  updateCounts();
  updateJobStatus();

  // Status and delete buttons
  document.querySelectorAll(".job-card").forEach(card => {
    const badge = card.querySelector("button");
    const interviewBtn = card.querySelectorAll("button")[1];
    const rejectBtn = card.querySelectorAll("button")[2];
    const deleteIcon = card.querySelector(".fa-trash-can");

    // Interview button


    interviewBtn.addEventListener("click", () => {
      card.dataset.status = "interview";
      badge.innerText = "INTERVIEW";
      badge.className = "px-4 py-1 rounded-md font-medium text-[14px] bg-green-100 text-green-600";
      interviewBtn.classList.add("bg-green-100");
      rejectBtn.classList.remove("bg-red-100");

      actionTaken = true;
      updateCounts();
      updateJobStatus();
    });

    // Rejected button
    rejectBtn.addEventListener("click", () => {
      card.dataset.status = "rejected";
      badge.innerText = "REJECTED";
      badge.className = "px-4 py-1 rounded-md font-medium text-[14px] bg-red-100 text-red-600";
      rejectBtn.classList.add("bg-red-100");
      interviewBtn.classList.remove("bg-green-100");

      actionTaken = true;
      updateCounts();
      updateJobStatus();
    });

    // Delete button
    deleteIcon.addEventListener("click", () => {
      card.remove();
      actionTaken = true;
      updateCounts();
      updateJobStatus();
      checkEmptyState();
    });
  });



  // Filter buttons
     filterButtons.forEach(button => {
      button.addEventListener("click", () => {

      filterButtons.forEach(btn => {
        btn.classList.remove("bg-blue-500", "text-white");
        btn.classList.add("bg-white", "text-black");
      });

      button.classList.remove("bg-white", "text-black");
      button.classList.add("bg-blue-500", "text-white");

      currentFilter = button.innerText.trim().toLowerCase();

      let visibleCount = 0;
      document.querySelectorAll(".job-card").forEach(card => {
        const status = card.dataset.status;
        if (currentFilter === "all" || status === currentFilter) {
          card.style.display = "block";
          visibleCount++;
        } else {
          card.style.display = "none";
        }
      });

      if (visibleCount === 0) emptyMessage.classList.remove("hidden");
      else emptyMessage.classList.add("hidden");

      updateJobStatus();
    });
  });

  // Count section
  function updateCounts() {
    const cards = document.querySelectorAll(".job-card");

    let interview = 0;
    let rejected = 0;

    cards.forEach(card => {
      if (card.dataset.status === "interview") interview++;
      if (card.dataset.status === "rejected") rejected++;
    });

    totalCount.innerText = cards.length;
    interviewCount.innerText = interview;
    rejectedCount.innerText = rejected;
  }

  // Empty state
  function checkEmptyState() {
    const visibleCards = Array.from(document.querySelectorAll(".job-card"))
      .filter(card => card.style.display !== "none");

    if (visibleCards.length === 0) emptyMessage.classList.remove("hidden");
    else emptyMessage.classList.add("hidden");
  }

  // right-side job status
  function updateJobStatus() {
    const allCards = document.querySelectorAll(".job-card");
    const visibleCards = Array.from(allCards).filter(card => card.style.display !== "none");

    if (!actionTaken && currentFilter === "all") {
      
      jobStatusText.innerText = `${initialTotal} jobs`;
    } else {
      jobStatusText.innerText = `${visibleCards.length} of ${initialTotal} jobs`;
    }
  }

});