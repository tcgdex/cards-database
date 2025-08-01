import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Jasmine's Steelix",
         ja: "JasmineのSteelix",
         fr: "Jasmine's Steelix",
         de: "Jasmine's Steelix",
         es: "Steelix de Jasmine",
         it: "Jasmine's Stelix",
         pt: "Jasmine's Steelix",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [208],
      hp: 80,
      types: ["Metal"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Bind",
            ja: "バインド",
            fr: "Lier",
            de: "Binden",
            es: "Unir",
            it: "Legamento",
            pt: "Vincular",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 10,
        },
        {
          cost: ["Metal", "Colorless"],
          name: {
            en: "Iron Tail",
            ja: "鉄の尾",
            fr: "Queue de fer",
            de: "Eisenschwanz",
            es: "Cola de hierro",
            it: "Coda di ferro",
            pt: "Cauda de ferro",
          },
          effect: {
            en: "Flip a coin until you get tails. This attack does 20 damage times the number of heads.",
            ja: "尾がなくなるまでコインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Retournez une pièce jusqu'à ce que vous obteniez la queue. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "Drehen Sie eine Münze um, bis Sie Schwänze bekommen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Voltea una moneda hasta que obtengas colas. Este ataque hace 20 veces el número de cabezas.",
            it: "Capovolgi una moneta fino a quando non ricevi la coda. Questo attacco fa 20 danni il numero di teste.",
            pt: "Vire uma moeda até obter caudas. Este ataque causa 20 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 4,

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
