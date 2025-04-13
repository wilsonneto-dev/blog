---
title: 'Hello World em Diversas Linguagens de Programação'
date: '2025-04-13T10:00:00'
description: 'Uma coleção de exemplos "Hello World" nas linguagens de programação mais populares, com explicações sobre a sintaxe básica de cada uma.'
topics: ['Programação', 'Fundamentos']
authors:
  - name: 'Wilson Neto'
    link: 'https://github.com/wilsonneto-dev'
---

O "Hello World" é tradicionalmente o primeiro programa que escrevemos ao aprender uma nova linguagem de programação. Este artigo apresenta exemplos desse clássico programa em diversas linguagens, servindo como um guia prático para quem está começando ou explorando diferentes tecnologias.

## Por que "Hello World"?

O conceito do "Hello World" como primeiro programa foi introduzido no livro "The C Programming Language" de Brian Kernighan e Dennis Ritchie em 1978. Desde então, tornou-se uma tradição que cumpre vários propósitos:

1. **Verificação de ambiente**: Confirma se o ambiente de desenvolvimento está configurado corretamente
2. **Sintaxe básica**: Introduz a estrutura fundamental de um programa na linguagem
3. **Execução e saída**: Demonstra como executar código e produzir uma saída visível

Vamos explorar como esse simples programa se manifesta em diversas linguagens populares.

## JavaScript

JavaScript é uma linguagem interpretada, multiparadigma, e uma das mais usadas para desenvolvimento web.

```javascript
// Hello World em JavaScript
console.log("Hello, World!");

// Usando função
function sayHello() {
  return "Hello, World!";
}
console.log(sayHello());
```

Para executar, você pode usar um navegador ou Node.js.

## Python

Python é conhecida por sua sintaxe limpa e legibilidade, sendo muito usada em ciência de dados, IA e desenvolvimento web.

```python
# Hello World em Python
print("Hello, World!")

# Usando função
def say_hello():
    return "Hello, World!"
    
print(say_hello())
```

## Java

Java é uma linguagem orientada a objetos que roda na JVM (Java Virtual Machine), muito usada em aplicações empresariais.

```java
// Hello World em Java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
    
    // Usando método
    public static String sayHello() {
        return "Hello, World!";
    }
}
```

## C#

C# é uma linguagem desenvolvida pela Microsoft, parte da plataforma .NET, usada para desenvolvimento Windows, web e jogos.

```csharp
// Hello World em C#
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
        
        // Usando método
        Console.WriteLine(SayHello());
    }
    
    static string SayHello()
    {
        return "Hello, World!";
    }
}
```

## Go

Go (ou Golang) é uma linguagem desenvolvida pelo Google, conhecida por sua eficiência e suporte nativo a concorrência.

```go
// Hello World em Go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
    fmt.Println(sayHello())
}

func sayHello() string {
    return "Hello, World!"
}
```

## Rust

Rust é uma linguagem focada em segurança, velocidade e concorrência, sem coletor de lixo.

```rust
// Hello World em Rust
fn main() {
    println!("Hello, World!");
    println!("{}", say_hello());
}

fn say_hello() -> String {
    String::from("Hello, World!")
}
```

## PHP

PHP é uma linguagem especializada para desenvolvimento web do lado do servidor.

```php
<?php
// Hello World em PHP
echo "Hello, World!";

// Usando função
function sayHello() {
    return "Hello, World!";
}
echo sayHello();
?>
```

## TypeScript

TypeScript é um superconjunto de JavaScript que adiciona tipagem estática opcional.

```typescript
// Hello World em TypeScript
console.log("Hello, World!");

// Usando função com tipo de retorno
function sayHello(): string {
    return "Hello, World!";
}
console.log(sayHello());
```

## Swift

Swift é a linguagem moderna da Apple para desenvolvimento iOS, macOS, watchOS e tvOS.

```swift
// Hello World em Swift
print("Hello, World!")

// Usando função
func sayHello() -> String {
    return "Hello, World!"
}
print(sayHello())
```

## Ruby

Ruby é conhecida por sua elegância e é frequentemente usada com o framework Rails para desenvolvimento web.

```ruby
# Hello World em Ruby
puts "Hello, World!"

# Usando método
def say_hello
  "Hello, World!"
end

puts say_hello
```

## Kotlin

Kotlin é uma linguagem moderna que roda na JVM, oficialmente suportada para desenvolvimento Android.

```kotlin
// Hello World em Kotlin
fun main() {
    println("Hello, World!")
    println(sayHello())
}

fun sayHello(): String {
    return "Hello, World!"
}
```

## Bash

Bash é a linguagem de script padrão em sistemas Unix e Linux.

```bash
#!/bin/bash
# Hello World em Bash
echo "Hello, World!"

# Usando função
say_hello() {
    echo "Hello, World!"
}
say_hello
```

## Conclusão

Como vimos, o conceito de "Hello World" se adapta a cada linguagem de programação, refletindo suas particularidades sintáticas. Embora o resultado final seja o mesmo – exibir uma mensagem de saudação – a maneira como isso é implementado pode variar significativamente.

Esta introdução serve como um ponto de partida para explorar a diversidade de linguagens disponíveis. Cada uma tem seus pontos fortes e casos de uso ideais, e a escolha depende sempre do contexto e dos requisitos específicos do projeto.

Se você está começando na programação, recomendo escolher uma linguagem desta lista que pareça interessante e aprofundar-se nela. A jornada de mil linhas de código começa com um simples "Hello, World!". 