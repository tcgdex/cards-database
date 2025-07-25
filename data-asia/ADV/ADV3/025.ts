import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Ampharos ex",
         ja: "Ampharos Ex",
         fr: "Ampharos ex",
         de: "Ampharos ex",
         es: "Ámpharos ex",
         it: "Ampharos Ex",
         pt: "Ampharos Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [181],
      hp: 150,
      types: ["Lightning"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Conductivity",
            ja: "導電率",
            fr: "Conductivité",
            de: "Leitfähigkeit",
            es: "Conductividad",
            it: "Conduttività",
            pt: "Condutividade",
          },
          effect: {
            en: "As long as Ampharos ex is in play, whenever your opponent attaches an Energy card to his or her PokÃ©mon from hand, put 1 damage counter on that PokÃ©mon. You can't put more than 1 damage counter even if there is more than 1 Ampharos ex in play.",
            ja: "Ampharos Exがプレイしている限り、対戦相手がエネルギーカードを手から彼または彼女のポカモンに取り付けるときはいつでも、そのポカンに1つのダメージカウンターを置きます。複数のアンファロスがプレイされていても、1つ以上のダメージカウンターを置くことはできません。",
            fr: "Tant qu'Ampharos ex est en jeu, chaque fois que votre adversaire attache une carte d'énergie à son poké de la main, mettez 1 compteur de dégâts sur ce poké. Vous ne pouvez pas mettre plus d'un compteur de dégâts même s'il y a plus d'un Ampharos ex en jeu.",
            de: "Solange Ampharos EX im Spiel ist, geben Sie dann, wenn Ihr Gegner eine Energiekarte an seinem Poké Mon von der Hand befindet, 1 Schadenschalter auf diese Poké Mon Mon. Sie können nicht mehr als 1 Schadenschalter setzen, selbst wenn mehr als 1 Ampharos EX im Spiel sind.",
            es: "Mientras Ampharos Ex esté en juego, cada vez que su oponente le atribuye una carta de energía a su Poké Mon de la mano, ponga 1 contador de daño en ese Poké Mon. No puedes poner más de 1 contador de daño, incluso si hay más de 1 Ampharos ex en juego.",
            it: "Finché Ampharos Ex è in gioco, ogni volta che il tuo avversario collega una carta energetica al suo poké da mano, metti 1 contatore di danni su quel poké mon. Non puoi mettere più di 1 contatore di danni anche se in gioco c'è più di 1 Ampharos Ex.",
            pt: "Enquanto os Ampharos Ex estiverem em jogo, sempre que seu oponente conecta uma carta de energia ao seu Poké -Mon da mão, coloque 1 contador de danos naquele Poké Mon. Você não pode colocar mais de 1 contador de danos, mesmo que haja mais de 1 Ampharos Ex em jogo.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless", "Colorless"],
          name: {
            en: "Gigavolt",
            ja: "ギガボルト",
            fr: "Gigavolt",
            de: "Gigavolt",
            es: "Gigavolio",
            it: "Gigvolt",
            pt: "Gigavolt",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 40 damage plus 30 more damage. If tails, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は40ダメージに加えて30ダメージを与えます。尾の場合、防御するポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 40 dégâts plus 30 dégâts supplémentaires. Si Tails, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 40 Schäden plus 30 weitere Schäden. Wenn Schwänze, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 40 daños más 30 más de daño. Si cola, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 40 danni più 30 danni in più. Se le code, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 40 danos mais 30 mais danos. Se as caudas, o pokemon defensor agora está paralisado.",
          },
        },
      ],

      retreat: 3,

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
