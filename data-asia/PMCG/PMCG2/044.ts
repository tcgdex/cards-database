import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Clefable",
         ja: "Clefable",
         fr: "Tour",
         de: "Clefable",
         es: "Complejo",
         it: "Clefable",
         pt: "Clefable",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [36],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Metronome",
            ja: "メトロノーム",
            fr: "Métronome",
            de: "Metronom",
            es: "Metrónomo",
            it: "Metronomo",
            pt: "Metrônomo",
          },
          effect: {
            en: "Choose 1 of your opponent's Active Pokemon's attacks and use it as this attack.",
            ja: "対戦相手のアクティブなポケモンの攻撃の1つを選択し、この攻撃として使用します。",
            fr: "Choisissez 1 des attaques de Pokémon actifs de votre adversaire et utilisez-le comme cette attaque.",
            de: "Wählen Sie 1 der aktiven Pokemon -Angriffe Ihres Gegners und verwenden Sie es als Angriff.",
            es: "Elija 1 de los ataques activos de Pokémon de su oponente y úselo como este ataque.",
            it: "Scegli 1 degli attacchi di Pokemon attivi del tuo avversario e usalo come questo attacco.",
            pt: "Escolha 1 dos ataques de Pokémon ativos do seu oponente e use -o como esse ataque.",
          },

        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Minimize",
            ja: "最小化します",
            fr: "Minimiser",
            de: "Minimieren",
            es: "Minimizar",
            it: "Minimizzare",
            pt: "Minimizar",
          },
          effect: {
            en: "During your opponent's next turn, this Pokemon takes 20 less damage from attacks (after applying Weakness and Resistance).",
            ja: "対戦相手の次のターン中、このポケモンは攻撃から20回少ないダメージを受けます（脱力感と抵抗を適用した後）。",
            fr: "Au cours du prochain virage de votre adversaire, ce Pokémon subit 20 dégâts de moins des attaques (après avoir appliqué une faiblesse et une résistance).",
            de: "Während der nächsten Kurve Ihres Gegners nimmt dieses Pokémon 20 weniger Schaden durch Angriffe (nachdem sie Schwäche und Widerstand angewendet hat).",
            es: "Durante el próximo turno de tu oponente, este Pokémon recibe 20 daños menos de los ataques (después de aplicar debilidad y resistencia).",
            it: "Durante il prossimo turno del tuo avversario, questo Pokemon subisce 20 danni in meno dagli attacchi (dopo aver applicato la debolezza e la resistenza).",
            pt: "Durante o próximo turno do seu oponente, este Pokemon recebe 20 menos danos causados por ataques (após aplicar fraqueza e resistência).",
          },

        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
