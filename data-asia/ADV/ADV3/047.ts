import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Rayquaza ex",
         ja: "Rayquaza Ex",
         fr: "Rayquaza ex",
         de: "Rayquaza ex",
         es: "Rayquaza ex",
         it: "Rayquaza ex",
         pt: "Rayquaza Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [384.1],
      hp: 100,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Spiral Growth",
            ja: "らせん成長",
            fr: "Croissance spirale",
            de: "Spiralwachstum",
            es: "Crecimiento espiral",
            it: "Crescita a spirale",
            pt: "Crescimento em espiral",
          },
          effect: {
            en: "Flip a coin until you get tails. For each heads, search your discard pile for a basic Energy card and attach it to Rayquaza ex.",
            ja: "尾がなくなるまでコインをひっくり返します。各ヘッドについて、廃棄の山を検索して、基本的なエネルギーカードを調べ、Rayquaza Exに取り付けます。",
            fr: "Retournez une pièce jusqu'à ce que vous obteniez la queue. Pour chaque tête, recherchez votre tas de défausse pour une carte d'énergie de base et attachez-la à Rayquaza Ex.",
            de: "Drehen Sie eine Münze um, bis Sie Schwänze bekommen. Suchen Sie für jeden Köpfe Ihren Ablagerungsstapel nach einer grundlegenden Energiekarte und befestigen Sie sie an Rayquaza EX.",
            es: "Voltea una moneda hasta que obtengas colas. Para cada cabezal, busque en su pila de descarte para una tarjeta de energía básica y adhiérase a Rayquaza Ex.",
            it: "Capovolgi una moneta fino a quando non ricevi la coda. Per ogni testa, cerca il tuo mucchio di scarti una scheda di energia di base e attaccalo a Rayquaza Ex.",
            pt: "Vire uma moeda até obter caudas. Para cada cabeça, procure sua pilha de descarte para obter um cartão de energia básico e anexe -o a Rayquaza Ex.",
          },
        },
        {
          cost: ["Fire", "Lightning"],
          name: {
            en: "Dragon Burst",
            ja: "ドラゴンバースト",
            fr: "Éclatement de dragon",
            de: "Dragon platzte",
            es: "Estallido del dragón",
            it: "Drago scoppia",
            pt: "Dragon Burst",
          },
          effect: {
            en: "Discard either all Fire Energy or all Lightning Energy attached to Rayquaza ex. This attack does 40 damage times the amount of Fire or Lightning Energy discarded.",
            ja: "すべての火エネルギーまたはRayquaza Exに取り付けられたすべての稲妻エネルギーのいずれかを捨てます。この攻撃は、廃棄された火災または雷エネルギーの量を40回ダメージします。",
            fr: "Jetez toute l'énergie de tir ou toute l'énergie de la foudre attachée à Rayquaza Ex. Cette attaque fait 40 dégâts de temps la quantité de feu ou d'énergie de foudre jetée.",
            de: "Entsorgen Sie entweder die gesamte Feuerenergie oder alle Blitzergie, die an Rayquaza EX angebracht sind. Dieser Angriff schädigt 40 Zeiten der Menge an Feuer- oder Blitzenergie, die verworfen wird.",
            es: "Deseche toda la energía de fuego o toda la energía del rayo unida a Rayquaza Ex. Este ataque hace 40 veces el daño de la cantidad de fuego o energía de rayo descartada.",
            it: "Scartare tutta l'energia del fuoco o tutta l'energia del fulmine attaccata a Rayquaza Ex. Questo attacco fa 40 danni volte la quantità di fuoco o l'energia dei fulmini scartati.",
            pt: "Descarte toda a energia de fogo ou toda a energia de raios ligada a Rayquaza Ex. Este ataque causa 40 danos vezes a quantidade de incêndio ou energia de raios descartada.",
          },
        },
      ],

      retreat: 2,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
