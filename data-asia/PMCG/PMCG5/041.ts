import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Lt. Surge's Electabuzz",
         ja: "SurgeのElectabuzz",
         fr: "Electabuzz du lieutenant-lieutenant",
         de: "Lt. Surge's Electabuzz",
         es: "El electabuzz del teniente Surge",
         it: "Electabuzz di Ten",
         pt: "Electabuzz do tenente Surge",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [125],
      hp: 70,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Charge",
            ja: "充電",
            fr: "Charge",
            de: "Aufladung",
            es: "Cargar",
            it: "Carica",
            pt: "Cobrar",
          },
          effect: {
            en: "Take up to 2 Lightning Energy cards from your discard pile and attach them to Lt. Surge's Electabuzz.",
            ja: "廃棄パイルから最大2枚の稲妻エネルギーカードを取り、それらをサージ中将のエレクトアバズに取り付けます。",
            fr: "Prenez jusqu'à 2 cartes d'énergie Lightning de votre tas de défausse et attachez-les aux Electabuzz du lieutenant.",
            de: "Nehmen Sie bis zu 2 Lightning Energy -Karten von Ihrem Ablagerungsstapel und befestigen Sie sie an Electabuzz von Lt. Surge.",
            es: "Tome hasta 2 tarjetas de energía de Lightning de su pila de descarte y adhiévalas al Electabuzz del teniente Surge.",
            it: "Prendi fino a 2 fulmini dal tuo mucchio di scarto e letta al Tenente Electabuzz di Surge.",
            pt: "Pegue até 2 cartões de energia da Lightning da sua pilha de descarte e anexe -os ao eleitoral do tenente Surge.",
          },
        },
        {
          cost: ["Lightning"],
          name: {
            en: "Discharge",
            ja: "排出",
            fr: "Décharge",
            de: "Entladung",
            es: "Descargar",
            it: "Scarico",
            pt: "Descarga",
          },
          effect: {
            en: "Discard all Lightning Energy cards attached to Lt. Surge's Electabuzz in order to use this attack. Flip a number of coins equal to the number of Lightning Energy cards you discarded. This attack does 30 damage times the number of heads.",
            ja: "この攻撃を使用するために、Surge Lt. SurgeのElectabuzzに取り付けられたすべてのLightningエネルギーカードを廃棄します。廃棄した稲妻エネルギーカードの数に等しい多数のコインをひっくり返します。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
            fr: "Jeter toutes les cartes d'énergie Lightning attachées aux Electabuzz du lieutenant de surtension afin d'utiliser cette attaque. Retournez un certain nombre de pièces égales au nombre de cartes d'énergie Lightning que vous avez jetées. Cette attaque fait 30 dégâts de temps le nombre de têtes.",
            de: "Entsorgen Sie alle Blitzsenergiekarten, die an Electabuzz von Lt. Surge angeschlossen sind, um diesen Angriff zu verwenden. Drehen Sie eine Anzahl von Münzen um, die der Anzahl der von Ihnen verworfenen Blitzelenergiekarten entsprechen. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Köpfe.",
            es: "Deseche todas las cartas de energía de Lightning unidas al ElectAbuzz del teniente Surge para usar este ataque. Voltee una serie de monedas igual al número de tarjetas de energía de rayos que descartó. Este ataque hace 30 veces el número de cabezas.",
            it: "Scartare tutte le carte di energia Lightning collegate all'Electabuzz di Ten. Capovolgi una serie di monete pari al numero di carte di energia fulmini che hai scartato. Questo attacco fa 30 danni volte al numero di teste.",
            pt: "Descarte todos os cartões de energia da Lightning Anexados ao Electabuzz do tenente Surge, a fim de usar esse ataque. Vire uma série de moedas iguais ao número de cartões de energia relâmpago que você descartou. Este ataque causa 30 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 2,

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
