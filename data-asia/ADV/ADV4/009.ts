import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Heracross",
         ja: "ヘラクロス",
         fr: "Hélicoïdal",
         de: "Heracross",
         es: "Heracross",
         it: "Eracross",
         pt: "Heracross",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [214],
      hp: 70,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Extra Draw",
            ja: "余分なドロー",
            fr: "Tirage supplémentaire",
            de: "Zusätzliche Ziehung",
            es: "Sorteo",
            it: "Pareggio extra",
            pt: "Draw extra",
          },
          effect: {
            en: "If your opponent has any Pokemon-ex in play, search your deck for up to 2 Grass Energy cards and attach them to Heracross. Shuffle your deck afterward.",
            ja: "対戦相手がポケモンエクスをプレイしている場合は、デッキを最大2匹の草エネルギーカードで検索し、ヘラクロスに取り付けます。その後、デッキをシャッフルします。",
            fr: "Si votre adversaire dispose de Pokemon-EX en jeu, recherchez votre deck jusqu'à 2 cartes d'énergie de l'herbe et attachez-les à Heracross. Mélanger votre deck par la suite.",
            de: "Wenn Ihr Gegner Pokemon-EX im Spiel hat, suchen Sie Ihr Deck nach bis zu 2 Grasergiekarten und befestigen Sie sie an Heracross. Mischen Sie anschließend Ihr Deck.",
            es: "Si tu oponente tiene algún Pokémon-EX en juego, busque en tu mazo hasta 2 cartas de energía de hierba y adjuntarlas a Heracross. Baraja tu mazo después.",
            it: "Se il tuo avversario ha un pokemon-ex in gioco, cerca nel tuo mazzo fino a 2 carte di energia dell'erba e attaccali a Eracross. Shuffle il tuo mazzo in seguito.",
            pt: "Se o seu oponente tiver algum Pokemon-Ex em jogo, procure seu baralho por até 2 cartas de energia de grama e anexe-as a Heracross. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
            en: "Sonicboom",
            ja: "Sonicboom",
            fr: "Sonicboom",
            de: "Sonicboom",
            es: "Sonicboom",
            it: "Sonicboom",
            pt: "Sonicboom",
          },
          effect: {
            en: "This attack's damage isn't affected by Weakness or Resistance.",
            ja: "この攻撃の損傷は、脱力感や抵抗の影響を受けません。",
            fr: "Les dommages de cette attaque ne sont pas affectés par la faiblesse ou la résistance.",
            de: "Der Schaden dieses Angriffs ist nicht von Schwäche oder Widerstand beeinflusst.",
            es: "El daño de este ataque no se ve afectado por la debilidad o la resistencia.",
            it: "Il danno di questo attacco non è influenzato dalla debolezza o dalla resistenza.",
            pt: "O dano desse ataque não é afetado pela fraqueza ou resistência.",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
