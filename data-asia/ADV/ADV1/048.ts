import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Mightyena",
         ja: "マイティエナ",
         fr: "Puissant",
         de: "Mightyena",
         es: "Mightyena",
         it: "Potente",
         pt: "Mightyena",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [262],
      hp: 70,
      types: ["Darkness"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Intimidating Fang",
            ja: "恐ろしい牙",
            fr: "Fang intimidant",
            de: "Fang einschüchtern",
            es: "Colmillo intimidante",
            it: "Tang intimidatorio",
            pt: "Fang intimidante",
          },
          effect: {
            en: "As long as Mightyena is your Active PokÃ©mon, any damage done to your PokÃ©mon by an opponent's attack is reduced by 10 (before applying Weakness and Resistance).",
            ja: "MightyenaがあなたのアクティブなPokã©Monである限り、相手の攻撃によってPokã©Monに与えられた損害は10増加します（脱力感と抵抗を適用する前に）。",
            fr: "Tant que Mightyena est votre poké actif, tout dommage causé à votre poké par l'attaque d'un adversaire est réduit de 10 (avant d'appliquer une faiblesse et une résistance).",
            de: "Solange Mightyena Ihr aktiver Pokémon ist, wird jeder Schaden, der durch den Angriff eines Gegners an Ihrem Poké Mon mon angerichtet wird, um 10 reduziert (bevor Schwäche und Widerstand angewendet werden).",
            es: "Mientras Mightyena sea tu Poké Mon activo, cualquier daño hecho a tu Poké Mon por el ataque de un oponente se reduce en 10 (antes de aplicar debilidad y resistencia).",
            it: "Finché Mightyena è il tuo poké attivo, qualsiasi danno fatto al tuo poké dall'attacco di un avversario è ridotto di 10 (prima di applicare debolezza e resistenza).",
            pt: "Enquanto Mightyena for o seu Poké Mon ativo, qualquer dano causado ao seu Poké Mon pelo ataque de um oponente é reduzido em 10 (antes de aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Darkness", "Colorless", "Colorless"],
          name: {
            en: "Shakedown",
            ja: "シェイクダウン",
            fr: "Lit de fortune",
            de: "Shakedown",
            es: "Chantaje",
            it: "Shakedown",
            pt: "Shakedown",
          },
          effect: {
            en: "Flip a coin. If heads, choose 1 card from your opponent's hand without looking and discard it.",
            ja: "コインをひっくり返します。頭の場合は、見ても捨てずに相手の手から1枚のカードを選択してください。",
            fr: "Retourner une pièce. Si les têtes, choisissez 1 carte dans la main de votre adversaire sans la regarder et la jeter.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, wählen Sie 1 Karte aus der Hand Ihres Gegners, ohne sie zu schauen, und entsorgen Sie sie.",
            es: "Voltea una moneda. Si se dirige, elija 1 tarjeta de la mano de su oponente sin mirarla y descartarla.",
            it: "Capovolgi una moneta. Se le teste, scegli 1 carta dalla mano del tuo avversario senza guardarlo e scartarla.",
            pt: "Vire uma moeda. Se as cabeças, escolha 1 cartão da mão do seu oponente sem olhar e descartar.",
          },
          damage: 40,
        },
      ],

      retreat: 1,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"]
		},
	],
};
