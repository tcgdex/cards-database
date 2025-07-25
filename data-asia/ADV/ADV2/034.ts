import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Sandslash",
         ja: "サンドスラッシュ",
         fr: "Sable",
         de: "Sandslash",
         es: "Sarnslash",
         it: "Sandslash",
         pt: "Sandshlash",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [28],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Sand Swirl",
            ja: "砂の渦巻き",
            fr: "Tourbillon de sable",
            de: "Sandwirbel",
            es: "Arena",
            it: "Turbinio di sabbia",
            pt: "Rodo de areia",
          },
          effect: {
            en: "Does 20 damage to each Defending Pokemon. The Defending Pokemon can't retreat until the end of your opponent's next turn.",
            ja: "防御する各ポケモンに20のダメージを与えます。ディフェンディングポケモンは、相手の次のターンの終わりまで退却することはできません。",
            fr: "Fait 20 dommages à chaque Pokémon en défense. Le Pokémon en défense ne peut pas se retirer jusqu'à la fin du prochain tour de votre adversaire.",
            de: "Schädigt 20 an jedem verteidigenden Pokémon 20. Das verteidigende Pokémon kann sich erst am Ende der nächsten Runde Ihres Gegners zurückziehen.",
            es: "Hace 20 daños a cada Pokémon defensor. El Pokémon defensor no puede retirarse hasta el final del próximo turno de tu oponente.",
            it: "Fa 20 danni a ciascun Pokemon in difesa. Il Pokemon in carica non può ritirarsi fino alla fine del turno successivo del tuo avversario.",
            pt: "Causa 20 danos a cada Pokémon defensor. O Pokémon atual não pode recuar até o final do próximo turno do seu oponente.",
          },
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Earthquake",
            ja: "地震",
            fr: "Tremblement de terre",
            de: "Erdbeben",
            es: "Terremoto",
            it: "Terremoto",
            pt: "Terremoto",
          },
          effect: {
            en: "Does 10 damage to each of your Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "ベンチ付きポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Fait 10 dommages à chacun de vos pokémon bancés. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Schädigt 10 jedes Ihrer Bankpokémon. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Hace 10 daños a cada uno de sus Pokémon de banca. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Fa 10 danni a ciascuno dei Pokemon in panchina. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "10 danos a cada um dos seus Pokémon em banco. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 60,
        },
      ],

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
