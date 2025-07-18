import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Solrock",
         ja: "ソロック",
         fr: "Solrock",
         de: "Solrock",
         es: "Solrock",
         it: "Solrock",
         pt: "Solrock",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [338],
      hp: 70,
      types: ["Fighting"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Solar Eclipse",
            ja: "日食",
            fr: "Éclipse solaire",
            de: "Sonnenfinsternis",
            es: "Eclipse solar",
            it: "Eclissi solare",
            pt: "Eclipse solar",
          },
          effect: {
            en: "Once during your turn (before your attack), if Lunatone is in play, you may use this power. Until the end of your turn, Solrock's type is Fire. This power can't be used if Solrock is affected by a Special Condition.",
            ja: "ターン中（攻撃前）に一度、Lunatoneが再生されている場合は、このパワーを使用できます。ターンの終わりまで、Solrockのタイプは火です。 Solrockが特別な状態の影響を受ける場合、この電力は使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), si Lunatone est en jeu, vous pouvez utiliser cette puissance. Jusqu'à la fin de votre tour, le type de Solrock est le feu. Cette puissance ne peut pas être utilisée si Solrock est affecté par une condition spéciale.",
            de: "Einmal während Ihres Zuges (vor Ihrem Angriff), wenn Lunatone im Spiel ist, können Sie diese Kraft verwenden. Bis zum Ende Ihres Zuges ist Solrocks Typ Feuer. Diese Leistung kann nicht verwendet werden, wenn Solrock durch einen besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno (antes de su ataque), si Lunatone está en juego, puede usar este poder. Hasta el final de su turno, el tipo de Solrock es fuego. Esta potencia no se puede usar si Solrock se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima dell'attacco), se il Lunatone è in gioco, puoi usare questo potere. Fino alla fine del tuo turno, il tipo di Solrock è fuoco. Questa potenza non può essere utilizzata se Solrock è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), se o Lunatone estiver em jogo, você poderá usar esse poder. Até o final do seu turno, o tipo de Solrock é fogo. Esse poder não pode ser usado se o Solrock for afetado por uma condição especial.",
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
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Solar Blast",
            ja: "ソーラーブラスト",
            fr: "Explosion solaire",
            de: "Solarenergie",
            es: "Explosión solar",
            it: "Esplosione solare",
            pt: "Explosão solar",
          },
          damage: 40,
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
