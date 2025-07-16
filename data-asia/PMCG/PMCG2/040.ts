import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Dodrio",
         ja: "ドドリオ",
         fr: "Conjurer",
         de: "Dodrio",
         es: "Ddrio",
         it: "Dodrio",
         pt: "Dodrio",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [85],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Retreat Aid",
            ja: "リトリートエイド",
            fr: "Aide à la retraite",
            de: "Rückzugshilfe",
            es: "Ayuda para retirarse",
            it: "Ritirare gli aiuti",
            pt: "Retiro ajuda",
          },
          effect: {
            en: "As long as Dodrio is Benched, pay {{e}} less to retreat your Active Pokmon.",
            ja: "Dodrioがベンチにある限り、アクティブなポケモンを後退させるために{{e}}を支払います。",
            fr: "Tant que Dodrio est banc, payez {{e}} moins pour retirer votre pokemon actif.",
            de: "Solange Dodrio auf der Hand ist, zahlen Sie {{E}} weniger, um Ihr aktives Pokémon zurückzuziehen.",
            es: "Mientras DDRIO esté en banca, paga {{e}} menos para retirar tu pokemon activo.",
            it: "Finché Dodrio è in panchina, paga {{e}} meno per ritirare il tuo Pokemon attivo.",
            pt: "Enquanto Dodrio estiver em banco, pague {{e}} menos para recuar seu Pokemon ativo.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Rage",
            ja: "怒り",
            fr: "Rage",
            de: "Wut",
            es: "Furia",
            it: "Rabbia",
            pt: "Raiva",
          },
          effect: {
            en: "Does 10 damage plus 10 more damage for each damage counter on Dodrio.",
            ja: "Dodrioの各ダメージカウンターで10ダメージと10ダメージをさらに10回します。",
            fr: "Fait 10 dégâts plus 10 dommages supplémentaires pour chaque compteur de dégâts sur Dodrio.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jeden Schadenschalter auf Dodrio.",
            es: "Hace 10 daños más 10 más de daño por cada contador de daños en DODRIO.",
            it: "Fa 10 danni più 10 danni in più per ciascun contatore di danni su Dodrio.",
            pt: "10 danos mais 10 mais danos para cada contador de danos no Dodrio.",
          },
          damage: None,
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
