$(document).ready(function() {
    var books = {
        "Syllabus": [
            {
                "url": "https://drive.google.com/file/d/1GJCaoekiQTRgm5H6fMqtP2y3gRLplD8d/view?usp=share_link.pdf",
                "name": "UPSC Syllabus"
            }
        ],
        "Ncerts": [
            {
                "url": "https://drive.google.com/file/d/1V4fVl3DIs0yhn5JkF4gu1JjsgdaH7T_0/view?usp=share_link.pdf",
                "name": "Class-6 [Polity crux]"
            },
            {
                "url": "https://drive.google.com/file/d/1_s9-37ADh5igr9eOwtmQ_wGCmlxalmAn/view?usp=share_link.pdf",
                "name": "Class-6 [History crux]"
            },
            {
                "url": "https://drive.google.com/file/d/1gy5QkXYaWvsC-DBKd0LK5ZT_v0X9iDJC/view?usp=share_link.pdf",
                "name": "Class-6 [Geography crux]"
            },
			{
                "url": "https://drive.google.com/file/d/1UzcBZM6mwnS8czbOajjKqGkogwhBhkPI/view?usp=share_link.pdf",
                "name": "Class-7 [Polity crux]"
            },
            {
                "url": "https://drive.google.com/file/d/1MOrRDa9tXtpEgICGCeqFvKJy6qf6gWiO/view?usp=share_link.pdf",
                "name": "Class-7 [History crux]"
            },
            {
                "url": "https://drive.google.com/file/d/19O1bTLbH6bUF_i1ekyY8kvw7JqRQt8Fc/view?usp=share_link.pdf",
                "name": "Class-7 [Geography crux]"
            },
			{
                "url": "https://drive.google.com/file/d/1Ajo-EBRzBK4aTe9aGMoXrjlZbu-wEiQu/view?usp=share_link.pdf",
                "name": "Class-8 [Polity crux]"
            },
            {
                "url": "https://drive.google.com/file/d/12lhJIhlJ0IiQc47MvlKNLSCs6fT4O3cK/view?usp=share_link.pdf",
                "name": "Class-8 [History crux]"
            },
            {
                "url": "https://drive.google.com/file/d/1Pdmfe2BI7bJqnOpKZJBZhnT5vhzesimc/view?usp=share_link.pdf",
                "name": "Class-8 [Geography crux]"
            },
            {
                "url": "https://drive.google.com/file/d/1MXR4w9L5hFIq-AtJ-lqHZW1hVlpQDnG3/view?usp=share_link.pdf",
                "name": "Class-8 [Science crux]"
            },
			{
                "url": "https://drive.google.com/file/d/1_QFc_o6v_-nxFOpsaadscBt6lvvbRElZ/view?usp=share_link.pdf",
                "name": "Class-9 [Polity crux]"
            },
            {
                "url": "https://drive.google.com/file/d/1MsEg4k9-8sYlCM_qKSXDAAYbYWhpVyT1/view?usp=share_link.pdf",
                "name": "Class-9 [History crux]"
            },
            {
                "url": "https://drive.google.com/file/d/1db_r_VCwDSakK8YVqONqGek1hFRKgTj2/view?usp=share_link.pdf",
                "name": "Class-9 [Geography crux]"
            },
            {
                "url": "https://drive.google.com/file/d/10fG2M64qtbccWns7RRXxNIU0kkt2s5B2/view?usp=share_link.pdf",
                "name": "Class-9 [Science crux]"
            },
			{
                "url": "https://drive.google.com/file/d/1fg-C3yQSuGNGSFAlvuqyultf3IN6QO14/view?usp=share_link.pdf",
                "name": "Class-10 [Polity crux]"
            },
            {
                "url": "https://drive.google.com/file/d/1flCq96tqIQjkmbA0SWJO5z1fZnedT0O8/view?usp=share_link.pdf",
                "name": "Class-10 [History crux]"
            },
            {
                "url": "https://drive.google.com/file/d/17VNOJp0s_MoyUfT5JXGd_HD1gBsrG4CT/view?usp=share_link.pdf",
                "name": "Class-10 [Geography crux]"
            },
            {
                "url": "https://drive.google.com/file/d/1F3kdExe-7qRu7klNtxG1EnIS4PA47gu_/view?usp=share_link.pdf",
                "name": "Class-10 [Science crux]"
            },
            {
                "url": "https://drive.google.com/file/d/1qg8B-XobYKaCoK2_QeEvsjo94DaS0FWP/view?usp=share_link.pdf",
                "name": "Class-10 [Economy crux]"
            },
			{
                "url": "https://drive.google.com/file/d/1eBCjvsZ1p6HlTCMD8-rBjJJiT2MBdc0_/view?usp=share_link.pdf",
                "name": "Class-11 [Polity-1 crux]"
            },
            {
                "url": "https://drive.google.com/file/d/1lgDn2ED2l6AsNcxGrkckxSOxNHOoOBGd/view?usp=share_link.pdf",
                "name": "Class-11 [Polity-2 crux]"
            },
            {
                "url": "https://drive.google.com/file/d/1klm3htVWVjVMjhVSpDK9QVzro0u7tE2w/view?usp=share_link.pdf",
                "name": "Class-11 [Geography-1 crux]"
            },
            {
                "url": "https://drive.google.com/file/d/1C8T2j3SLlrsXXdqZGQ6N-5cq_QxNTTFi/view?usp=share_link.pdf",
                "name": "Class-11 [Geography-2 crux]"
            },
            {
                "url": "https://drive.google.com/file/d/1rcrp1KQZsU5swauIusZirPxk4TZ4jYy3/view?usp=share_link.pdf",
                "name": "Class-11 [Economy crux]"
            },
            {
                "url": "https://drive.google.com/file/d/1-KXHFbMegQ-3GmW1tl1ADtvh-APUD6Oo/view?usp=share_link.pdf",
                "name": "Class-11 [Fine Arts part-1 crux]"
            },
            {
                "url": "https://drive.google.com/file/d/1ZhaPKm8V4-J_DYnVRwlkjF2E7FMESKDc/view?usp=share_link.pdf",
                "name": "Class-11 [Fine Arts part-2 crux]"
            },
            {
                "url": "https://drive.google.com/file/d/1jX0vfQ6R8wYIFPhAaUclrzzcaTUyLTDw/view?usp=share_link.pdf",
                "name": "Class-11 [Fine Arts part-3 crux]"
            },
			{
                "url": "https://drive.google.com/file/d/1X0ezBerQQGxb5SDRgQ90kxyPWDw1Kt3k/view?usp=share_link.pdf",
                "name": "Class-12 [Polity-1 crux]"
            },
            {
                "url": "https://drive.google.com/file/d/1y6_nBBJAuaGF_OcRaUbeT-1HQ2MzkkB8/view?usp=share_link.pdf",
                "name": "Class-12 [Polity-2 crux]"
            },
            {
                "url": "https://drive.google.com/file/d/1Q8QEyw8RGMF-M3O-ZpYxZ-i4IOpl4JlZ/view?usp=share_link.pdf",
                "name": "Class-12 [Geography-1 crux]"
            },
            {
                "url": "https://drive.google.com/file/d/1i8ZpD02EFggWIcPdIar-IgjwtVuflUsN/view?usp=share_link.pdf",
                "name": "Class-12 [Geography-2(i) crux]"
            },
			{
                "url": "https://drive.google.com/file/d/1Y8d5OXoYkiOrSUsrZBidc_OGpDJihb2G/view?usp=share_link.pdf",
                "name": "Class-12 [Geography-2(ii) crux]"
            },
            {
                "url": "https://drive.google.com/file/d/1X-ZPS4idXf-SLdPRDhHjHdh90OPJdIrd/view?usp=share_link.pdf",
                "name": "Class-12 [Economy crux]"
            },
            {
                "url": "https://drive.google.com/file/d/1ZRtZMxQrxKb9a8wchQVvc6tdY1mpJNuY/view?usp=share_link.pdf",
                "name": "Class-12 [History part-1 crux]"
            },
            {
                "url": "https://drive.google.com/file/d/10SaLTcPipzMNWJeWB6N1sba7V4i0Jx-Q/view?usp=share_link.pdf",
                "name": "Class-12 [History part-2 crux]"
            },
            {
                "url": "https://drive.google.com/file/d/1v2UyJrB9aRmdmXgHlNm0hN7cpEemCk59/view?usp=share_link.pdf",
                "name": "Class-12 [Fine Arts crux]"
            },
            {
                "url": "https://drive.google.com/file/d/1nmTWC3y5cdsYLlU6uOWENxjkf3wGLXC3/view?usp=share_link.pdf",
                "name": "Class-12 [Economic Glossary]"
            },
            {
                "url": "https://drive.google.com/file/d/1faf8HRFrgIQddKI1qz-O0LTdyDHwUdd1/view?usp=share_link.pdf",
                "name": "Class-12 [Biology crux]"
            }
        ],
        "Statics-books": [
            {
                "url": "https://drive.google.com/file/d/1H3pwkDLewx6j0_wLNIyxzMkGBRaayUHi/view?usp=share_link.pdf",
                "name": "M.Laxmikant"
            },
            {
                "url": "https://drive.google.com/file/d/1HJazNnDTFE8X9tXszKVDCPJET0ZQwULT/view?usp=share_link.pdf",
                "name": "Modern India:Spectrum"
            },
            {
                "url": "https://drive.google.com/file/d/1aeFkXABt1eXBd4-R3LeskV1TWYYyJgBI/view?usp=drive_link.pdf",
                "name": "Modern India:Bipin chandra"
            }
        ],
        "Polity": [
            {
                "url": "https://drive.google.com/file/d/1a9Pv5LKF1nBTFDkUEr69xfsf5tiDDzaJ/view?usp=drive_link.pdf",
                "name": "Main Constitution Articles"
            },
			{
                "url": "https://drive.google.com/file/d/1bNKrNfHpjCwtNZinyuT3G_RK_xv4jzcO/view?usp=drive_link.pdf",
                "name": "Polity crux"
            },
			{
                "url": "#",
                "name": "Handout-1 crux"
            },
            {
                "url": "#",
                "name": "Handout-2 crux"
            },
            {
                "url": "#",
                "name": "Handout-3 crux"
            }
        ],
        "Economy": [
            {
                "url": "https://drive.google.com/file/d/1_U0NZLVgSbtNm8B3lYspuAxzhncOOmHl/view?usp=sharing.pdf",
                "name": "Economy"
            },
			{
                "url": "#",
                "name": "Handout-1 crux"
            },
            {
                "url": "#",
                "name": "Handout-2 crux"
            },
            {
                "url": "#",
                "name": "Handout-3 crux"
            }
        ],
        "History": [
		    {
                "url": "https://drive.google.com/file/d/1a2aiHgaX2lskifGtx2umUCV4cymJmORK/view?usp=drive_link.pdf",
                "name": "Medieval history"
            },
			{
                "url": "https://drive.google.com/file/d/1a2sY6QWB0Iv_btjvzD_D3P6UY8jorCEq/view?usp=drive_link.pdf",
                "name": "History timeline"
            },
            {
                "url": "https://drive.google.com/file/d/1bNOwR1hocJcRzTMA-enFpErqCtp1h-zW/view?usp=drive_link.pdf",
                "name": "Ancient History"
            },
			{
                "url": "#",
                "name": "Handout-1 crux"
            },
            {
                "url": "#",
                "name": "Handout-2 crux"
            },
            {
                "url": "#",
                "name": "Handout-3 crux"
            }
        ],
        "Geography-environment": [
            {
                "url": "https://drive.google.com/file/d/1bR9Fa5wzKsBvHe0PMWn0Eh2-Vege8Gtf/view?usp=drive_link.pdf",
                "name": "Geography G.C. Leong"
            },
			{
                "url": "https://drive.google.com/file/d/1bVxEM7GvNqdjgZWDElDPWv5ztjMTOxp3/view?usp=drive_link.pdf",
                "name": "Geography Crux"
            },
			{
                "url": "#",
                "name": "Handout-1 crux"
            },
            {
                "url": "#",
                "name": "Handout-2 crux"
            },
            {
                "url": "#",
                "name": "Handout-3 crux"
            }
        ],
		"Science": [
            {
                "url": "https://drive.google.com/file/d/1HP8wAZHUfCxRWw8LnqasjkBVTFnLtDp9/view?usp=drive_link.pdf",
                "name": "Biology"
            },
			{
                "url": "https://drive.google.com/file/d/1a18Vb437h6GJRt4ljRI0MUFkCRF2iGfX/view?usp=drive_link.pdf",
                "name": "Science And Tech"
            }
        ],
        "Gspapers": [
            {
                "url": "https://drive.google.com/file/d/1aQwbfHN4IOV2ZebaUwqSBEg8v-I_gd6h/view?usp=drive_link.pdf",
                "name": "Paper-1"
            },
            {
                "url": "https://drive.google.com/file/d/1aUqlcsEeUgEjXc4BqIEUmseGBPRk8ZXN/view?usp=drive_link.pdf",
                "name": "Paper-2"
            },
            {
                "url": "https://drive.google.com/file/d/1aZo68EudJaH6KX_6VvyDyIqdFj8NQbV-/view?usp=drive_link.pdf",
                "name": "Paper-3"
            }
        ],
        "Ethics": [
            {
                "url": "https://drive.google.com/file/d/1bTPb4zDQsGgwJyLmxnTlH8P_dycNAQWY/view?usp=drive_link.pdf",
                "name": "Ethics crux"
            }
        ],
        "Essay": [
            {
                "url": "https://drive.google.com/file/d/1bI1zXaqIK5F2JuNHOwh0UdUkMfm81tdR/view?usp=drive_link.pdf",
                "name": "Essay Writing"
            }
        ],
        "Model-Answers": [
            {
                "url": "https://drive.google.com/file/d/1aBMjk2jayZg8ctugdp_RPHSEI6LrQfOy/view?usp=drive_link.pdf",
                "name": "Paper-1"
            },
            {
                "url": "https://drive.google.com/file/d/1aF72cgyLMJpgWOjZCIpr1EgUX2T_R8U8/view?usp=drive_link.pdf",
                "name": "Paper-2"
            },
            {
                "url": "https://drive.google.com/file/d/1aLvaMoGz-yl3yn8kJuXriZHydq7KWJRA/view?usp=drive_link.pdf",
                "name": "Paper-3"
            },
            {
                "url": "https://drive.google.com/file/d/1abZKNsso_9tQ9inZbtlzkM1nw5OqWydN/view?usp=drive_link.pdf",
                "name": "Paper-4"
            }
        ],
        "History-optional": [
            {
                "url": "https://drive.google.com/file/d/1aavzv_0Mlb008jLk6_gEw4NxWbb8_iPk/view?usp=drive_link.pdf",
                "name": "Syllabus"
            },
            {
                "url": "#",
                "name": "Paper-1"
            },
            {
                "url": "#",
                "name": "Paper-2"
            },
            {
                "url": "https://drive.google.com/file/d/1ai9XfbCkVQ_48iWcFSAcfRmCvyFINOgv/view?usp=drive_link.pdf",
                "name": "Model Answer Paper-1"
            },
            {
                "url": "https://drive.google.com/file/d/1aiNGmf4LiL1QALscpv_yALXujrTxjAiN/view?usp=drive_link.pdf",
                "name": "Model Answer Paper-2"
            }
        ],
        "Yearly-crux": [
            {
                "url": "#",
                "name": "Yearly Crux"
            }
        ]
    };

    $(".Syllabus, .Ncerts, .Statics-books, .Polity, .Economy, .History, .Geography-environment, .Gspapers, .Ethics, .Essay, .Model-Answers, .History-optional, .Yearly-crux, .Science").click(function() {
        var subject = $(this).attr("class");
        var pdfUrls = books[subject];

        localStorage.setItem("pdfUrls", JSON.stringify(pdfUrls));
        window.location.href = "pdf.html";
    });
});
