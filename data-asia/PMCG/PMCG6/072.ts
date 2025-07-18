import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Koga's Ditto",
         ja: "コガの同上",
         fr: "Ditto de Koga",
         de: "Kogas dito",
         es: "Koga es ídem",
         it: "Koga's Idem",
         pt: "O idem de Koga",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [132],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Giant Growth",
            ja: "巨大な成長",
            fr: "Croissance géante",
            de: "Riesenwachstum",
            es: "Crecimiento gigante",
            it: "Crescita gigante",
            pt: "Crescimento gigante",
          },
          effect: {
            en: "Flip a coin. If heads, Koga's Ditto's maximum HP is now 80 and Koga's Ditto's Pound attack's base damage is 30 instead of 10. (Benching Koga's Ditto ends this effect.)",
            ja: "コインをひっくり返します。ヘッドの場合、KogaのDittoの最大HPは80になり、KogaのDittoのポンド攻撃のベースダメージは10ではなく30です（KogaのDittoがこの効果を終了します。）",
            fr: "Retourner une pièce. Si les têtes, le Ditto de Koga, le HP maximum est maintenant de 80 et les dégâts de base de l'attaque de la livre de Koga sont de 30 au lieu de 10 (bancs de Koga terminent cet effet.)",
            de: "Eine Münze drehen. Wenn Kogas ditos maximaler HP jetzt 80 ist und Kogas Dittos Pfund -Angriffs -Basisschaden 30 anstelle von 10 beträgt (Bank von Koga von Koga beendet diesen Effekt.)",
            es: "Voltea una moneda. Si se dirige, el HP máximo de Koga Ditto ahora tiene 80 años y el daño base del ataque de libra de Koga es 30 en lugar de 10 (banca, el ídem de Koga termina este efecto).",
            it: "Capovolgi una moneta. Se le teste, il massimo HP di Koga è ora 80 e il danno di base di Koga di Lip Attack è di 30 anziché 10. (La panchina di Koga termina questo effetto.)",
            pt: "Vire uma moeda. Se as cabeças, a HP máxima de Koga no Ditto agora tem 80 anos e o dano básico de Koga's Ditto's Pound é 30 em vez de 10. (Com a bancada do Ditto de Koga termina esse efeito.)",
          },
        },
        {
          cost: ["Colorless"],
          name: {
            en: "Pound",
            ja: "ポンド",
            fr: "Livre",
            de: "Pfund",
            es: "Libra",
            it: "Libbra",
            pt: "Libra",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
