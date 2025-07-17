import {Card} from "../../../interfaces"
import Set from "../web1"

const card: Card = {
      set: Set,
      name: {
         en: "Dugtrio",
         ja: "Dugtrio",
         fr: "Dugtrio",
         de: "Dugtrio",
         es: "Dugtrio",
         it: "Dugtrio",
         pt: "Dugtrio",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [51],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Go Underground",
            ja: "地下に行きます",
            fr: "Se mettre sous terre",
            de: "Mach unterirdisch",
            es: "Ir bajo tierra",
            it: "Vai sottoterra",
            pt: "Vá no metrô",
          },
          effect: {
            en: "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks <em>(both yours and your opponent's)</em>.",
            ja: "このポケモンがあなたのベンチにある限り、攻撃<em>（あなたと相手の両方）でこのポケモンに与えられたすべての損害を防ぎます</em>。",
            fr: "Tant que ce Pokémon est sur votre banc, empêchez tous les dégâts causés à ce Pokémon par des attaques <em> (la vôtre et celle de votre adversaire) </em>.",
            de: "Solange dieses Pokémon auf Ihrer Bank liegt, verhindern Sie alle Schäden, die dieses Pokémon durch Angriffe <em> (sowohl Ihr als auch Ihr Gegner) </em>, verhindern.",
            es: "Mientras este Pokémon esté en tu banco, evite todo el daño hecho a este Pokémon por ataques <em> (tanto tuyo como tu oponente) </em>.",
            it: "Finché questo Pokémon è in panchina, impedisci tutti i danni arrecati a questo Pokémon dagli attacchi <em> (sia il tuo che il tuo avversario) </em>.",
            pt: "Enquanto este Pokémon estiver em seu banco, evite todos os danos causados a este Pokémon por ataques <em> (tanto o seu quanto o do seu oponente) </em>.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Fighting", "Fighting"],
          name: {
            en: "Earth Wave",
            ja: "地球の波",
            fr: "Vague de terre",
            de: "Erdwelle",
            es: "Ola de la tierra",
            it: "Onda di terra",
            pt: "Onda de terra",
          },
          effect: {
            en: "This attack does 10 damage to 2 of your opponent's Benched Pokemon. (Don't apply Weakness or Resistance for Benched Pokemon.)",
            ja: "この攻撃は、対戦相手のベンチポケモンの2つに10ダメージを与えます。 （ベンチポケモンに衰弱や抵抗を適用しないでください。）",
            fr: "Cette attaque fait 10 dégâts à 2 des pokemon bancés de votre adversaire. (N'appliquez pas la faiblesse ou la résistance des Pokémon bancés.)",
            de: "Dieser Angriff schädigt 10 von 2 der Bankpokémon Ihres Gegners. (Wenden Sie keine Schwäche oder Widerstand für Bank -Pokémon an.)",
            es: "Este ataque hace 10 daños a 2 de los Pokémon de banca de tu oponente. (No aplique debilidad o resistencia para los Pokémon de banca).",
            it: "Questo attacco infligge 10 danni a 2 dei Pokemon in panchina del tuo avversario. (Non applicare debolezza o resistenza per i Pokemon in panchina.)",
            pt: "Este ataque causa 10 danos a 2 dos Pokémon bancos do seu oponente. (Não aplique fraqueza ou resistência a Pokemon com bancada.)",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
