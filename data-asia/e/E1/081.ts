import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Raichu - 081/128",
         ja: "ライチュ-081/128",
         fr: "Raichu - 081/128",
         de: "Raichu - 081/128",
         es: "Raichu - 081/128",
         it: "Raichu - 081/128",
         pt: "Raichu - 081/128",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [26],
      hp: 80,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Plasma",
            ja: "プラズマ",
            fr: "Plasma",
            de: "Plasma",
            es: "Plasma",
            it: "Plasma",
            pt: "Plasma",
          },
          effect: {
            en: "If there are any Lightning Energy cards in your discard pile, flip a coin.  If heads, attach 1 of them to Raichu.",
            ja: "廃棄パイルに稲妻エネルギーカードがある場合は、コインをひっくり返します。  頭の場合は、それらの1つをライチュに取り付けます。",
            fr: "S'il y a des cartes d'énergie Lightning dans votre tas de défausse, retournez une pièce.  Si les têtes, attachez 1 d'entre elles à Raichu.",
            de: "Wenn Sie Lightning Energy -Karten in Ihrem Ablagerungsstapel enthalten, drehen Sie eine Münze um.  Wenn Köpfe, befestigen Sie 1 von ihnen an Raichu.",
            es: "Si hay tarjetas de energía de rayos en su pila de descarte, voltea una moneda.  Si se dirige, adjunte 1 de ellos a Raichu.",
            it: "Se ci sono carte di energia Lightning nella tua pila di scarto, capovolgi una moneta.  Se le teste, attaccano 1 di loro a Raichu.",
            pt: "Se houver cartas de energia raios em sua pilha de descarte, vire uma moeda.  Se as cabeças, anexe 1 delas a Raichu.",
          },
          damage: 10,
        },
        {
          cost: ["Lightning", "Lightning", "Colorless"],
          name: {
            en: "Shock Bolt",
            ja: "ショックボルト",
            fr: "Boulon de choc",
            de: "Stoßschraube",
            es: "Perno de choque",
            it: "Bullone d'urto",
            pt: "Parafuso de choque",
          },
          effect: {
            en: "Discard all Lightning Energy cards attached to Raichu or this attack does nothing.",
            ja: "Raichuに取り付けられたすべてのLightning Energyカードを廃棄するか、この攻撃は何もしません。",
            fr: "Jeter toutes les cartes d'énergie Lightning attachées à Raichu ou cette attaque ne fait rien.",
            de: "Verwerfen Sie alle an Raichu angeschlossenen Blitzelenergiekarten, oder dieser Angriff tut nichts.",
            es: "Deseche todas las cartas de energía de Lightning unidas a Raichu o este ataque no hace nada.",
            it: "Scartare tutte le carte di energia fulmini attaccate a Raichu o questo attacco non fa nulla.",
            pt: "Descarte todos os cartões de energia de raios ligados a Raichu ou este ataque não faz nada.",
          },
          damage: 60,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
