import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Flareon - 017/088",
         ja: "Flareon -017/088",
         fr: "Flareon - 017/088",
         de: "Flareon - 017/088",
         es: "Flareon - 017/088",
         it: "Flareon - 017/088",
         pt: "Flareon - 017/088",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [136],
      hp: 70,
      types: ["Fire"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Self-healing",
            ja: "自己癒し",
            fr: "Auto-guérison",
            de: "Selbstheilung",
            es: "Autosanación",
            it: "Auto-guarigione",
            pt: "Auto-cicatrização",
          },
          effect: {
            en: "Whenever you attach a Fire Energy card from your hand to Flareon, remove all Special Conditions affecting Flareon.",
            ja: "手からフレレオンに火のエネルギーカードを取り付けるときはいつでも、フレアロンに影響を与えるすべての特別な条件を削除します。",
            fr: "Chaque fois que vous attachez une carte d'énergie de feu de votre main à Flareon, retirez toutes les conditions spéciales affectant Flareon.",
            de: "Wenn Sie eine Feuerergiekarte von Ihrer Hand an Flareon anbringen, entfernen Sie alle speziellen Bedingungen, die Flareon betreffen.",
            es: "Siempre que adjunte una tarjeta de energía de fuego de su mano a Flareon, elimine todas las condiciones especiales que afectan a Flareon.",
            it: "Ogni volta che si collega una carta di energia antincendio dalla mano a Flareon, rimuovere tutte le condizioni speciali che colpiscono Flareon.",
            pt: "Sempre que você conectar um cartão de energia de incêndio da sua mão a Flareon, remova todas as condições especiais que afetam o flareon.",
          },
      }],

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Singe",
            ja: "シング",
            fr: "Roussir",
            de: "Versengen",
            es: "Chamuscar",
            it: "Singe",
            pt: "Singe",
          },
          effect: {
            en: "The Defending Pokemon is now Burned.",
            ja: "防御ポケモンは現在燃やされています。",
            fr: "Le Pokémon en défense est maintenant brûlé.",
            de: "Das verteidigende Pokemon ist jetzt verbrannt.",
            es: "El Pokémon defensor ahora está quemado.",
            it: "Il Pokemon in carica viene ora bruciato.",
            pt: "O Pokémon atual agora está queimado.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Burn Booster",
            ja: "燃焼ブースター",
            fr: "Bossal de brûlure",
            de: "Verbrennungswahrnehmung",
            es: "Refuerzo de quemaduras",
            it: "Brucia booster",
            pt: "Queima de reforço",
          },
          effect: {
            en: "Discard an Energy card attached to Flareon in order to use this attack. If the discarded card is a Fire Energy card, this attack does 40 damage plus 10 more damage.",
            ja: "この攻撃を使用するために、フレアロンに取り付けられたエネルギーカードを廃棄します。廃棄されたカードが火災エネルギーカードの場合、この攻撃は40ダメージに加えて10ダメージを与えます。",
            fr: "Jeter une carte d'énergie attachée à Flareon afin d'utiliser cette attaque. Si la carte jetée est une carte d'énergie de feu, cette attaque fait 40 dégâts plus 10 dégâts supplémentaires.",
            de: "Verwerfen Sie eine an Flareon angebrachte Energiekarte, um diesen Angriff zu verwenden. Wenn die weggeworfene Karte eine Brandenergiekarte ist, verursacht dieser Angriff 40 Schaden zuzüglich 10 weitere Schäden.",
            es: "Deseche una tarjeta de energía unida a Flareon para usar este ataque. Si la carta desechada es una carta de energía de fuego, este ataque hace 40 daños más 10 daños más.",
            it: "Scartare una carta di energia collegata a Flareon per usare questo attacco. Se la carta scartata è una carta di energia antincendio, questo attacco infligge 40 danni più 10 danni.",
            pt: "Descarte um cartão de energia anexado ao flareon para usar esse ataque. Se o cartão descartado for um cartão de energia de incêndio, esse ataque causará 40 danos mais 10 danos.",
          },
        },
      ],

      retreat: 1,

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
