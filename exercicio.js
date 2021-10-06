mensagem = " Lista de alunos APROVADOS e REPROVADOS: "

aluno1 = prompt("Digite o nome do Primeiro aluno:")
notasAluno1 = prompt("Digite as 3 notas do aluno separadas por vírgula. Ex.: 7,3,8").split(",")
respAluno1 = (parseFloat(notasAluno1[0]) + parseFloat(notasAluno1[1]) + parseFloat(notasAluno1[2]) ) /3
if (respAluno1 >= 5){ 
    mensagem += ("\nO aluno: " + aluno1 + ", foi APROVADO! Sua média foi: " + respAluno1)
}else {
    mensagem += ("\nO aluno: " + aluno1 + ", foi REPROVADO! Sua média foi: " + respAluno1)
}

aluno2 = prompt("Digite o nome do Segundo aluno:")
notasAluno2 = prompt("Digite as 3 notas do aluno separadas por vírgula. Ex.: 7,3,8").split(",")
respAluno2 = (parseFloat(notasAluno2[0]) + parseFloat(notasAluno2[1]) + parseFloat(notasAluno2[2]) ) /3
if (respAluno2 >= 5){ 
    mensagem += ("\nO aluno: " + aluno2 + ", foi APROVADO! Sua média foi: " + respAluno2)
}else {
    mensagem += ("\nO aluno: " + aluno2 + ", foi REPROVADO! Sua média foi: " + respAluno2)
}

aluno3 = prompt("Digite o nome do Terceiro aluno:")
notasAluno3 = prompt("Digite as 3 notas do aluno separadas por vírgula. Ex.: 7,3,8").split(",")
respAluno3 = (parseFloat(notasAluno3[0]) + parseFloat(notasAluno3[1]) + parseFloat(notasAluno3[2]) ) /3
if (respAluno3 >= 5){ 
    mensagem += ("\nO aluno: " + aluno3 + ", foi APROVADO! Sua média foi: " + respAluno3)
}else {
    mensagem += ("\nO aluno: " + aluno3 + ", foi REPROVADO! Sua média foi: " + respAluno3)
}

aluno4 = prompt("Digite o nome do Quarto aluno:")
notasAluno4 = prompt("Digite as 3 notas do aluno separadas por vírgula. Ex.: 7,3,8").split(",")
respAluno4 = (parseFloat(notasAluno4[0]) + parseFloat(notasAluno4[1]) + parseFloat(notasAluno4[2]) ) /3
if (respAluno4 >= 5){ 
    mensagem += ("\nO aluno: " + aluno4 + ", foi APROVADO! Sua média foi: " + respAluno4)
}else {
    mensagem += ("\nO aluno: " + aluno4 + ", foi REPROVADO! Sua média foi: " + respAluno4)
}

aluno5 = prompt("Digite o nome do Quinto aluno:")
notasAluno5 = prompt("Digite as 3 notas do aluno separadas por vírgula. Ex.: 7,3,8").split(",")
respAluno5 = (parseFloat(notasAluno5[0]) + parseFloat(notasAluno5[1]) + parseFloat(notasAluno5[2]) ) /3
if (respAluno5 >= 5){ 
    mensagem += ("\nO aluno: " + aluno5 + ", foi APROVADO! Sua média foi: " + respAluno5)
}else {
    mensagem += ("\nO aluno: " + aluno5 + ", foi REPROVADO! Sua média foi: " + respAluno5)
}
alert(mensagem)
