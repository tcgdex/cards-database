import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Blaine's Charizard",
         ja: "ブレインのカリザード",
         fr: "Charizard de Blaine",
         de: "Blaines Charizard",
         es: "Charizard de Blaine",
         it: "Blaine's Charizard",
         pt: "Charizard de Blaine",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [6],
      hp: 100,
      types: ["Fire"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Roaring Flames",
            ja: "炎を鳴らします",
            fr: "Flammes rugissantes",
            de: "Brüllende Flammen",
            es: "Llamas rugientes",
            it: "Fiamme ruggenti",
            pt: "Chamas rugindo",
          },
          effect: {
            en: "Discard all Fire energy cards attached to Blaine's Charizard. If all Energy cards attached to Blaine's Charizard provide 2 Fire Energy, discard all of them. This attack does 20 damage plus 20 more damage for each Fire Energy discarded in this way.",
            ja: "ブレインのカリザードに取り付けられたすべてのファイアエネルギーカードを捨ててください。 BlaineのCharizardに取り付けられたすべてのエネルギーカードが2つの火エネルギーを提供する場合、それらすべてを捨ててください。この攻撃は、この方法で廃棄された各火災エネルギーに対して20のダメージと20のダメージをもたらします。",
            fr: "Jeter toutes les cartes d'énergie de feu attachées au Charizard de Blaine. Si toutes les cartes d'énergie attachées au charizard de Blaine fournissent 2 énergies de feu, jetez toutes. Cette attaque fait 20 dégâts plus 20 dégâts supplémentaires pour chaque énergie de feu jetée de cette manière.",
            de: "Entsorgen Sie alle Brandenergiekarten, die an Blaines Charizard angebracht sind. Wenn alle an Blaines Charizard befestigten Energiekarten 2 Feuerenergie liefern, verwerfen Sie alle. Dieser Angriff verursacht 20 Schäden plus 20 weitere Schäden für jede auf diese Weise verworfene Feuerenergie.",
            es: "Deseche todas las tarjetas de energía de fuego unidas a Blaine's Charizard. Si todas las tarjetas de energía unidas al Charizard de Blaine proporcionan 2 energía de fuego, deséchelos todas. Este ataque hace 20 daños más 20 daños más por cada energía de fuego descartada de esta manera.",
            it: "Scartare tutte le carte di energia del fuoco collegate al Charizard di Blaine. Se tutte le carte energetiche collegate al Charizard di Blaine forniscono 2 incendi, scartarle tutte. Questo attacco infligge 20 danni più 20 danni in più per ogni energia di incendio scartata in questo modo.",
            pt: "Descarte todos os cartões de energia de incêndio anexados ao Charizard de Blaine. Se todos os cartões de energia anexados ao Charizard de Blaine fornecerem 2 energia de incêndio, descarte todos eles. Este ataque causa 20 danos mais 20 mais danos a cada energia de incêndio descartada dessa maneira.",
          },
        },
        {
          cost: ["Fire", "Fire"],
          name: {
            en: "Flame Jet",
            ja: "炎ジェット",
            fr: "Jet de flamme",
            de: "Flammenstrahl",
            es: "Chorro de llamas",
            it: "Jet Flame",
            pt: "Jato de chama",
          },
          effect: {
            en: "Flip a coin. If heads, choose 1 of your opponent's Pokemon. This attack does 40 damage to that Pokemon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
            ja: "コインをひっくり返します。頭の場合は、対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに40のダメージを与えます。この攻撃に衰弱と抵抗を適用しないでください。 （衰弱と抵抗を適用した後に発生する他の効果はまだ起こります。）",
            fr: "Retourner une pièce. Si les têtes, choisissez un des pokemon de votre adversaire. Cette attaque fait 40 dégâts à ce Pokémon. N'appliquez pas la faiblesse et la résistance pour cette attaque. (Tout autre effet qui se produirait après avoir appliqué une faiblesse et une résistance se produit.)",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 40. Wenden Sie keine Schwäche und Widerstand für diesen Angriff an. (Alle anderen Effekte, die nach der Anwendung von Schwächen und Widerstand auftreten würden.)",
            es: "Voltea una moneda. Si se dirige, elija 1 del Pokémon de tu oponente. Este ataque hace 40 daños a ese Pokémon. No aplique debilidad y resistencia para este ataque. (Cualquier otro efecto que suceda después de aplicar debilidad y resistencia aún ocurre).",
            it: "Capovolgi una moneta. Se le teste, scegli 1 del Pokemon del tuo avversario. Questo attacco infligge 40 danni a quel Pokemon. Non applicare debolezza e resistenza per questo attacco. (Qualsiasi altro effetto che si verificherebbe dopo aver applicato la debolezza e la resistenza.)",
            pt: "Vire uma moeda. Se as cabeças, escolha 1 do Pokémon do seu oponente. Este ataque causa 40 danos a esse Pokémon. Não aplique fraqueza e resistência a este ataque. (Quaisquer outros efeitos que aconteceriam após aplicar fraqueza e resistência ainda acontecem.)",
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
