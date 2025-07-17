import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Kingdra - 042/087",
         ja: "キングドラ-042/087",
         fr: "Kingdra - 042/087",
         de: "Kingdra - 042/087",
         es: "Kingdra - 042/087",
         it: "Kingdra - 042/087",
         pt: "Kingdra - 042/087",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [230],
      hp: 120,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Water Cyclone",
            ja: "ウォーターサイクロン",
            fr: "Cyclone d'eau",
            de: "Wasserzyklon",
            es: "Ciclón de agua",
            it: "Ciclone dell'acqua",
            pt: "Ciclone aquático",
          },
          effect: {
            en: "As often as you like during your turn <em>(before your attack)</em>, you may move a Water Energy card from your Active Pokmon to 1 of your Benched Pokmon. This power can't be used if Kingdra is affected by a Special Condition.",
            ja: "順番<em>（攻撃の前に）</em>中に好きなように、アクティブなポクモンからベンチ付きポクモンの1に水エネルギーカードを移動できます。 Kingdraが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Aussi souvent que vous le souhaitez pendant votre tour <em> (avant votre attaque) </em>, vous pouvez déplacer une carte d'énergie de l'eau de votre pokmon actif à 1 de votre pokmon banc. Ce pouvoir ne peut pas être utilisé si Kingdra est affecté par une condition spéciale.",
            de: "So oft Sie während Ihres Kurses <em> (vor Ihrem Angriff) </em> mögen, können Sie eine Wasserergiekarte von Ihrem aktiven Pokmon auf 1 Ihres Bank -Pokmons verschieben. Diese Kraft kann nicht verwendet werden, wenn Kingdra von einem besonderen Zustand betroffen ist.",
            es: "Tan a menudo como desee durante su turno <em> (antes de su ataque) </em>, puede mover una tarjeta de energía de agua de su Pokmon activo a 1 de su Pokmon de banca. Este poder no se puede usar si Kingdra se ve afectado por una condición especial.",
            it: "Tutte le volte che vuoi durante il tuo turno <em> (prima del tuo attacco) </em>, puoi spostare una carta di energia idrica dal tuo Pokmon attivo a 1 dei Pokmon in panchina. Questo potere non può essere usato se Kingdra è influenzato da una condizione speciale.",
            pt: "Sempre que quiser durante o seu turno <em> (antes do seu ataque) </em>, você pode mover um cartão de energia da água do seu Pokmon ativo para 1 do seu Pokmon em bancada. Esse poder não pode ser usado se Kingdra for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Water", "Colorless", "Colorless"],
          name: {
            en: "Rapids",
            ja: "急流",
            fr: "Rapides",
            de: "Stromschnellen",
            es: "Rápidos",
            it: "Rapide",
            pt: "Corredeiras",
          },
          effect: {
            en: "Flip a coin. If heads, discard 1 Energy card attached to the Defending Pokemon, if any.",
            ja: "コインをひっくり返します。頭の場合は、ディフェンディングポケモンに取り付けられた1つのエネルギーカードを捨ててください。",
            fr: "Retourner une pièce. Si les têtes, jetez la carte d'énergie 1 attachée au Pokémon en défense, le cas échéant.",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, entsorgen Sie 1 Energiekarte, die an das verteidigende Pokémon angebracht ist, falls vorhanden.",
            es: "Voltea una moneda. Si se dirige, deseche 1 tarjeta de energía unida al Pokémon defensor, si corresponde.",
            it: "Capovolgi una moneta. Se le teste, scartare 1 carta di energia collegata al Pokemon in difesa, se presente.",
            pt: "Vire uma moeda. Se as cabeças, descarte 1 cartão de energia conectado ao Pokémon defensor, se houver.",
          },
          damage: 50,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
