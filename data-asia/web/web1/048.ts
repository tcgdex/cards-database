import {Card} from "../../../interfaces"
import Set from "../web1"

const card: Card = {
      set: Set,
      name: {
         en: "Machamp",
         ja: "マチャンプ",
         fr: "Machamp",
         de: "Machamp",
         es: "Machamp",
         it: "Machamp",
         pt: "Machamp",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [68],
      hp: 90,
      types: ["Fighting"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Fighting", "Fighting"],
          name: {
            en: "Seething Anger",
            ja: "怒りを揺さぶる",
            fr: "Colère bouillonnante",
            de: "Wut brodeln",
            es: "Enojo hirviente",
            it: "Ribollente rabbia",
            pt: "Raiva fervilhante",
          },
          effect: {
            en: "Flip a number of coins equal to the number of damage counters on Machamp. This attack does 20 damage plus 10 more damage for each heads.",
            ja: "マチャンプのダメージカウンターの数に等しい数のコインをひっくり返します。この攻撃は20のダメージに加えて、各ヘッドに対してさらに10ダメージを与えます。",
            fr: "Retournez un certain nombre de pièces égales au nombre de compteurs de dégâts sur Machamp. Cette attaque fait 20 dégâts plus 10 dégâts supplémentaires pour chaque tête.",
            de: "Drehen Sie eine Reihe von Münzen um, die der Anzahl der Schadenszähler auf Machamp entsprechen. Dieser Angriff verursacht 20 Schäden plus 10 weitere Schäden für jeden Köpfe.",
            es: "Voltee una serie de monedas igual al número de contadores de daños en Machamp. Este ataque hace 20 daños más 10 daños más para cada cabezal.",
            it: "Capolare un numero di monete pari al numero di contatori di danno su Machamp. Questo attacco infligge 20 danni più 10 danni in più per ogni teste.",
            pt: "Vire uma série de moedas iguais ao número de contadores de danos em Machamp. Este ataque causa 20 de dano mais 10 mais danos para cada cabeça.",
          },
        },
        {
          cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
          name: {
            en: "Fling",
            ja: "逃げる",
            fr: "Jeter",
            de: "Schleudern",
            es: "Arrojar",
            it: "Lancia",
            pt: "Arremesso",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, he or she chooses 1 of them and switches it with the Defending Pokemon. (Do the damage before switching the Pokemon.)",
            ja: "対戦相手がベンチポケモンを持っている場合、彼または彼女はそれらの1つを選択し、防御ポケモンでそれを切り替えます。 （ポケモンを切り替える前にダメージを与えます。）",
            fr: "Si votre adversaire a des pokémon bancés, il en choisit l'un d'entre eux et le change avec le Pokémon en défense. (Faites les dégâts avant de changer le pokemon.)",
            de: "Wenn Ihr Gegner ein Bank -Pokemon hat, wählt er oder sie 1 davon aus und wechselt es mit dem verteidigenden Pokémon. (Führen Sie den Schaden an, bevor Sie das Pokémon wechseln.)",
            es: "Si tu oponente tiene algún Pokémon de banca, él o ella elige 1 de ellos y lo cambia con el Pokémon defensor. (Haz el daño antes de cambiar el Pokémon).",
            it: "Se il tuo avversario ha dei Pokemon in panchina, ne sceglie uno e lo cambia con il Pokemon in difesa. (Fai il danno prima di cambiare il Pokemon.)",
            pt: "Se o seu oponente tiver algum Pokémon em banco, ele escolhe 1 deles e o troca com o Pokémon atual. (Faça o dano antes de mudar o Pokemon.)",
          },
          damage: 50,
        },
      ],

      retreat: 3,

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
