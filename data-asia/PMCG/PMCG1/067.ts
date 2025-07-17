import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Clefairy",
         ja: "クリーフ",
         fr: "Clefairy",
         de: "Clefairy",
         es: "Clefairy",
         it: "Clefairy",
         pt: "Clefairy",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [35],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Sing",
            ja: "歌う",
            fr: "Chanter",
            de: "Singen",
            es: "Cantar",
            it: "Cantare",
            pt: "Cantar",
          },
          effect: {
            en: "Flip a coin. If heads, your opponent's Active Pokemon is now Asleep.",
            ja: "コインをひっくり返します。頭の場合、相手のアクティブなポケモンは眠っています。",
            fr: "Retourner une pièce. Si les têtes, le pokemon actif de votre adversaire est maintenant endormi.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, schläft das aktive Pokémon Ihres Gegners jetzt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon activo de tu oponente ahora está dormido.",
            it: "Capovolgi una moneta. Se la testa, i Pokemon attivi del tuo avversario ora dormono.",
            pt: "Vire uma moeda. Se as cabeças, o Pokémon ativo do seu oponente está agora dormindo.",
          },

        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
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
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          subtype: "shadowless",
        },
        {
          type: "holo",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};
