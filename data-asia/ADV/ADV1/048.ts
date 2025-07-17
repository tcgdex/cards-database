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
            en: "As long as Mightyena is your Active Pokémon, any damage done to your Pokémon by an opponent's attack is reduced by 10 <em>(before applying Weakness and Resistance)</em>.",
            ja: "Mightyenaがアクティブなポケモンである限り、相手の攻撃によってポケモンに与えられた損害は10 <em>（脱力感と抵抗を適用する前に）</em>に減少します。",
            fr: "Tant que Mightyena est votre Pokémon actif, tout dommage causé à votre Pokémon par l'attaque d'un adversaire est réduit de 10 <em> (avant d'appliquer une faiblesse et une résistance) </em>.",
            de: "Solange Mightyena Ihr aktives Pokémon ist, wird alle Schäden, die Ihr Pokémon durch den Angriff eines Gegners angerichtet haben, um 10 <em> (vor Anwendung von Schwäche und Widerstand) </em> reduziert.",
            es: "Mientras Mightyena sea tu Pokémon activo, cualquier daño hecho a tu Pokémon por el ataque de un oponente se reduce en 10 <em> (antes de aplicar debilidad y resistencia) </em>.",
            it: "Fintanto che Mightyena è il tuo Pokémon attivo, qualsiasi danno arrecato al tuo Pokémon dall'attacco di un avversario è ridotto di 10 <em> (prima di applicare debolezza e resistenza) </em>.",
            pt: "Enquanto Mightyena for o seu Pokémon ativo, qualquer dano causado ao seu Pokémon pelo ataque de um oponente é reduzido em 10 <em> (antes de aplicar fraqueza e resistência) </em>.",
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

};
