import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Claydol ex",
         ja: "Claydol Ex",
         fr: "Claydol ex",
         de: "Claydol ex",
         es: "Claydol ex",
         it: "Claydol Ex",
         pt: "Claydol Ex",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [344],
      hp: 120,
      types: ["Psychic"],
      stage: "Stage1",

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
            en: "Once during your turn (before your attack), you may use this power. Claydol ex's type is Fighting until the end of your turn.",
            ja: "ターン中（攻撃前）に、このパワーを使用できます。 Claydol Exのタイプは、あなたのターンの終わりまで戦っています。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez utiliser cette puissance. Le type de Claydol Ex se bat jusqu'à la fin de votre tour.",
            de: "Einmal während Ihres Zuges (vor Ihrem Angriff) können Sie diese Kraft einsetzen. Der Typ von Claydol Ex kämpft bis zum Ende Ihres Zuges.",
            es: "Una vez durante su turno (antes de su ataque), puede usar este poder. El tipo de Claydol Ex está luchando hasta el final de tu turno.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi usare questo potere. Il tipo di Claydol Ex sta combattendo fino alla fine del tuo turno.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode usar esse poder. O tipo de Claydol Ex está lutando até o final da sua vez.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Psychic Boom",
            ja: "サイキックブーム",
            fr: "Boom psychique",
            de: "Psychischer Boom",
            es: "Boom psíquico",
            it: "Boom psichico",
            pt: "Boom psíquico",
          },
          effect: {
            en: "Does 20 damage plus 10 more damage for each Energy attached to the Defending Pokemon.",
            ja: "20ダメージに加えて、防御ポケモンに付着した各エネルギーに対してさらに10ダメージを与えます。",
            fr: "Fait 20 dégâts plus 10 dommages supplémentaires pour chaque énergie attachée au Pokémon en défense.",
            de: "Fügt 20 Schäden plus 10 weitere Schäden für jede an das verteidigende Pokémon angeschlossene Energie.",
            es: "Hace 20 daños más 10 daños más por cada energía unida a los Pokémon defensores.",
            it: "Fa 20 danni più 10 danni in più per ogni energia attaccata al Pokemon in difesa.",
            pt: "Causam 20 danos mais 10 mais danos para cada energia ligada ao pokemon defensor.",
          },
        },
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
            en: "Shadow Crush",
            ja: "シャドウクラッシュ",
            fr: "Coup de poule",
            de: "Schattenquarmant",
            es: "Crush Sombe",
            it: "Shadow Crush",
            pt: "Crush de sombra",
          },
          effect: {
            en: "You may discard a Psychic Energy card attached to Claydol ex. If you do, discard an Energy card attached to the Defending Pokemon.",
            ja: "Claydol Exに取り付けられたサイキックエネルギーカードを捨てることができます。もしそうなら、防御ポケモンに取り付けられたエネルギーカードを捨ててください。",
            fr: "Vous pouvez jeter une carte d'énergie psychique attachée à Claydol Ex. Si vous le faites, jetez une carte d'énergie attachée au Pokémon en défense.",
            de: "Sie können eine psychische Energiekarte verwerfen, die an Claydol EX angeschlossen ist. Wenn Sie dies tun, entsorgen Sie eine an das verteidigende Pokemon angeschlossene Energiekarte.",
            es: "Puede descartar una tarjeta de energía psíquica unida a Claydol Ex. Si lo hace, deseche una tarjeta de energía unida al Pokémon defensor.",
            it: "Puoi scartare una carta di energia psichica collegata a Claydol Ex. Se lo fai, scartare una carta di energia collegata al Pokemon in difesa.",
            pt: "Você pode descartar um cartão de energia psíquica anexado ao Claydol Ex. Se o fizer, descarte um cartão de energia anexado ao Pokémon defensor.",
          },
          damage: 60,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
