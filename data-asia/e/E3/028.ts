import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Tentacool",
         ja: "Tentacool",
         fr: "Tentacool",
         de: "Tentacool",
         es: "Tentacool",
         it: "Tentacool",
         pt: "Tentacool",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [72],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Poison Sting",
            ja: "毒物",
            fr: "Piqûre de poison",
            de: "Giftstich",
            es: "Picadura de veneno",
            it: "Sting veleno",
            pt: "Picada de veneno",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Poisoned.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné.",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt vergiftet.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está envenenado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora avvelenato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está envenenado.",
          },
        },
        {
          cost: ["Water"],
          name: {
            en: "Recover",
            ja: "回復する",
            fr: "Récupérer",
            de: "Genesen",
            es: "Recuperar",
            it: "Recuperare",
            pt: "Recuperar",
          },
          effect: {
            en: "Discard 1 Water Energy card attached to Tentacool in order to use this attack. Remove all damage counters from Tentacool.",
            ja: "この攻撃を使用するために、Tentacoolに取り付けられた1つの水エネルギーカードを廃棄します。 Tentacoolからすべてのダメージカウンターを削除します。",
            fr: "Jetez 1 carte d'énergie d'eau attachée à Tentacool afin d'utiliser cette attaque. Retirez tous les compteurs de dégâts de Tentacool.",
            de: "Legen Sie die an Tentacool befestigte Wasserergiekarte ab, um diesen Angriff zu verwenden. Entfernen Sie alle Schadenszähler von Tentacool.",
            es: "Deseche 1 tarjeta de energía de agua unida a Tentacool para usar este ataque. Retire todos los contadores de daño de Tentacool.",
            it: "Scartare 1 carta di energia idrica attaccata a Tentacool per usare questo attacco. Rimuovere tutti i contatori di danno da Tentacool.",
            pt: "Descarte 1 cartão de energia da água preso ao Tentacool para usar esse ataque. Remova todos os contadores de danos do Tentacool.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
