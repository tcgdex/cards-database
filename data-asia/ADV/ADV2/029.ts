import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Lunatone",
         ja: "ルナトン",
         fr: "Lunatone",
         de: "Lunaton",
         es: "Lunatona",
         it: "Lunatone",
         pt: "Lunatone",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [337],
      hp: 60,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Lunar Eclipse",
            ja: "月食",
            fr: "Éclipse lunaire",
            de: "Mondfinsternis",
            es: "Eclipse lunar",
            it: "Eclissi lunare",
            pt: "Eclipse lunar",
          },
          effect: {
            en: "Once during your turn (before your attack), if Solrock is in play, you may use this power. Until the end of your turn, Lunatone's type is Darkness. This power can't be used if Lunatone is affected by a Special Condition.",
            ja: "ターン中（攻撃前）に、Solrockがプレイ中の場合は、このパワーを使用できます。ターンの終わりまで、ルナトンのタイプは闇です。ルナトンが特別な状態の影響を受ける場合、この電力は使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), si Solrock est en jeu, vous pouvez utiliser cette puissance. Jusqu'à la fin de votre tour, le type de Lunatone est l'obscurité. Ce pouvoir ne peut pas être utilisé si Lunatone est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff), wenn Solrock im Spiel ist, können Sie diese Kraft verwenden. Bis zum Ende Ihres Zuges ist Lunatones Typ Dunkelheit. Diese Leistung kann nicht angewendet werden, wenn Lunaton von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), si Solrock está en juego, puede usar este poder. Hasta el final de su turno, el tipo de lunatone es la oscuridad. Esta potencia no se puede usar si Lunatone se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima dell'attacco), se Solrock è in gioco, puoi usare questo potere. Fino alla fine del tuo turno, il tipo di Lunatone è l'oscurità. Questa potenza non può essere utilizzata se il Lunatone è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), se o Solrock estiver em jogo, você poderá usar esse poder. Até o final da sua vez, o tipo de Lunatone é escuridão. Esse poder não pode ser usado se o Lunatone for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Cosmic Draw",
            ja: "宇宙の引き分け",
            fr: "Tirage cosmique",
            de: "Kosmische Ziehung",
            es: "Sorteo cósmico",
            it: "Attrazione cosmica",
            pt: "Empate cósmico",
          },
          effect: {
            en: "If your opponent has any Evolved Pokemon in play, draw 3 cards.",
            ja: "相手が進化したポケモンをプレイしている場合は、3枚のカードを描きます。",
            fr: "Si votre adversaire a un pokemon évolué en jeu, dessinez 3 cartes.",
            de: "Wenn Ihr Gegner ein weiterentwickeltes Pokémon im Spiel hat, zeichnen Sie 3 Karten.",
            es: "Si tu oponente tiene algún Pokémon evolucionado en juego, dibuje 3 cartas.",
            it: "Se il tuo avversario ha un Pokemon evoluto in gioco, disegna 3 carte.",
            pt: "Se o seu oponente tiver algum Pokemon evoluído em jogo, desenhe 3 cartas.",
          },
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Lunar Blast",
            ja: "月の爆発",
            fr: "Explosion lunaire",
            de: "Lunar Explosion",
            es: "Explosión lunar",
            it: "Esplosione lunare",
            pt: "Explosão lunar",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
