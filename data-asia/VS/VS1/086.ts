import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Bruno's Hitmontop",
         ja: "ブルーノのヒットモントップ",
         fr: "Hitmontop de Bruno",
         de: "Brunos Hitmontop",
         es: "HitMontop de Bruno",
         it: "HitMontop di Bruno",
         pt: "Hitmontop de Bruno",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [237],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Quick Rotation",
            ja: "クイックローテーション",
            fr: "Rotation rapide",
            de: "Schnelle Rotation",
            es: "Rotación rápida",
            it: "Rotazione rapida",
            pt: "Rotação rápida",
          },
          effect: {
            en: "During your next turn, Bruno's Hitmontop's Spinning Head attack's base damage is 40 instead of 20.",
            ja: "次のターン中に、ブルーノのヒットモントップスピニングヘッド攻撃ベースのダメージは20ではなく40です。",
            fr: "Au cours de votre prochain tour, les dégâts de base d'attaque à la tête de Bruno à Hitmontop sont de 40 au lieu de 20.",
            de: "Während Ihrer nächsten Kurve beträgt Brunos Hitmontop Spinning Head Attack Basis -Basisschaden 40 anstelle von 20.",
            es: "Durante su próximo turno, el daño de la base de la cabeza de la cabeza hitmontop de Bruno es 40 en lugar de 20.",
            it: "Durante il turno successivo, il danno da base di attacco a testa di HitMontop di Bruno è 40 invece di 20.",
            pt: "Durante o seu próximo turno, o Hitmontop Spinning Head Attack Base da Hitmontop é 40 em vez de 20.",
          },
        },
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Spinning Head",
            ja: "スピニングヘッド",
            fr: "Tête de rotation",
            de: "Spinnkopf",
            es: "Cabeza giratoria",
            it: "Testa rotante",
            pt: "Cabeça giratória",
          },
          effect: {
            en: "If you have any Benched Pokemon, flip a coin. If heads, switch Bruno's Hitmontop with 1 of your Benched Pokemon.",
            ja: "ベンチ付きポケモンがある場合は、コインをひっくり返します。頭の場合は、1匹のベンチポケモンでブルーノのヒットモントップを切り替えます。",
            fr: "Si vous avez des pokemon bancés, retournez une pièce. Si les têtes, changez à Hitmontop de Bruno avec 1 de votre pokemon banc.",
            de: "Wenn Sie ein Bank -Pokemon haben, drehen Sie eine Münze. Wenn Sie Köpfe haben, wechseln Sie Brunos Hitmontop mit 1 Ihrer Bank -Pokemon.",
            es: "Si tienes algún Pokémon de banca, voltea una moneda. Si se dirige, cambie la hitmontop de Bruno con 1 de su pokemon de banca.",
            it: "Se hai dei Pokemon in panchina, capovolgi una moneta. Se la testa, cambia HitMontop di Bruno con 1 del tuo Pokemon in panchina.",
            pt: "Se você tiver algum Pokémon em banco, vire uma moeda. Se as cabeças, trocam o Hitmontop de Bruno com 1 do seu Pokemon em banco.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

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
