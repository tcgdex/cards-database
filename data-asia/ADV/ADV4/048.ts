import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Chimecho",
         ja: "キメコー",
         fr: "Chimecho",
         de: "Schornstein",
         es: "Chimecho",
         it: "Chimecho",
         pt: "Chimecho",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [358],
      hp: 60,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Chime",
            ja: "チャイム",
            fr: "Carillon",
            de: "Chime",
            es: "Repicar",
            it: "CHIME",
            pt: "CHIME",
          },
          effect: {
            en: "Search your opponent's discard pile for a Supporter card and use the effect of that card as the effect of this attack. (The Supporter card remains in your opponent's discard pile.)",
            ja: "対戦相手の廃棄パイルを検索して、サポーターカードを使用し、この攻撃の効果としてそのカードの効果を使用します。 （サポーターカードは相手の廃棄パイルに残ります。）",
            fr: "Recherchez la pile de défausse de votre adversaire pour une carte supportez et utilisez l'effet de cette carte comme l'effet de cette attaque. (La carte supporters reste dans la pile de défausse de votre adversaire.)",
            de: "Suchen Sie den Ablagerungsstapel Ihres Gegners nach einer Unterstützerkarte und verwenden Sie die Wirkung dieser Karte als den Effekt dieses Angriffs. (Die Unterstützerkarte bleibt auf dem Haufen Ihres Gegners.)",
            es: "Busque en la pila de descarte de su oponente para una carta de partidario y use el efecto de esa carta como el efecto de este ataque. (La carta de seguidores permanece en la pila de descarte de tu oponente).",
            it: "Cerca un mucchio di scarti del tuo avversario per una carta di sostenitore e usa l'effetto di quella carta come effetto di questo attacco. (La scheda di sostenitore rimane nella pila di scarto del tuo avversario.)",
            pt: "Pesquise a pilha de descarte do seu oponente para obter um cartão de apoiadores e use o efeito desse cartão como o efeito desse ataque. (O cartão de apoiadores permanece na pilha de descarte do seu oponente.)",
          },
        },
        {
          cost: ["Psychic"],
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
            en: "Does 10 damage times the amount of Energy attached to the Defending Pokemon.",
            ja: "ディフェンディングポケモンに取り付けられたエネルギーの量を10回ダメージします。",
            fr: "Fait 10 dégâts fois la quantité d'énergie attachée au Pokémon en défense.",
            de: "Schädigt 10 Schadenszeiten der an das verteidigenden Pokémon angeschlossenen Energie.",
            es: "Hace 10 tiempos de daño la cantidad de energía unida al Pokémon defensor.",
            it: "Fa 10 danni volte la quantità di energia collegata al Pokemon in difesa.",
            pt: "10 danos vezes a quantidade de energia ligada ao pokemon defensor.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
