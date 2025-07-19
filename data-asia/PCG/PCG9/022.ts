import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Salamence ex (Delta Species)",
         ja: "Salamence ex（デルタ種）",
         fr: "Salamence Ex (espèces delta)",
         de: "Salamence Ex (Delta -Arten)",
         es: "Salamence ex (especie delta)",
         it: "Salamence ex (Delta Species)",
         pt: "Salamence ex (espécies delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [373],
      hp: 160,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Type Shift",
            ja: "タイプシフト",
            fr: "Shift de type",
            de: "Typverschiebung",
            es: "Tipo de cambio",
            it: "Tipo turno",
            pt: "Tipo de mudança",
          },
          effect: {
            en: "Once during your turn (before your attack), you may use this power. Salamence ex's type is Fire until the end of your turn.",
            ja: "ターン中（攻撃前）に、このパワーを使用できます。 Salamence Exのタイプは、あなたのターンの終わりまで火災です。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez utiliser cette puissance. Le type de Salamence Ex est le feu jusqu'à la fin de votre tour.",
            de: "Einmal während Ihres Zuges (vor Ihrem Angriff) können Sie diese Kraft einsetzen. Der Typ von Salamence Ex ist das Feuer bis zum Ende Ihres Zuges.",
            es: "Una vez durante su turno (antes de su ataque), puede usar este poder. El tipo de salamence ex es el fuego hasta el final de su turno.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi usare questo potere. Il tipo di Salamence Ex è il fuoco fino alla fine del tuo turno.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode usar esse poder. O tipo de salamence ex é o fogo até o final da sua vez.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Claw Swipe",
            ja: "爪のスワイプ",
            fr: "Coup de griffe",
            de: "Klaue streift",
            es: "Golpear con garra",
            it: "Claw Swipe",
            pt: "Deslizamento da garra",
          },
          damage: 60,
        },
        {
          cost: ["Water", "Water", "Colorless", "Colorless"],
          name: {
            en: "Dual Stream",
            ja: "デュアルストリーム",
            fr: "Double ruisseau",
            de: "Dual Stream",
            es: "Corriente dual",
            it: "Dual Stream",
            pt: "Fluxo duplo",
          },
          effect: {
            en: "You may do 40 damage instead of 80 to the Defending Pokemon. If you do, this attack does 40 damage to 1 of your opponent's Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "防御ポケモンに対して80ではなく40ダメージを与えることができます。もしそうなら、この攻撃は、相手のベンチ付きポケモンの1つに40ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Vous pouvez faire 40 dégâts au lieu de 80 au Pokémon en défense. Si vous le faites, cette attaque fait 40 dégâts à 1 des pokemon bancés de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Sie können 40 Schaden anstelle von 80 an dem verteidigenden Pokémon anrichten. Wenn Sie dies tun, schädigt dieser Angriff einen Schaden an einem der Pokémon Ihres Gegners Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Puede hacer 40 daños en lugar de 80 al Pokémon defensor. Si lo haces, este ataque hace 40 daños a 1 de los Pokémon de banca de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Puoi fare 40 danni invece di 80 al Pokemon in difesa. Se lo fai, questo attacco infligge 40 danni a 1 dei Pokemon in panchina del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Você pode causar 40 danos em vez de 80 ao Pokémon atual. Se o fizer, esse ataque causa 40 danos a 1 dos Pokémon bancos do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 80,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
