import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Poliwag",
         ja: "poliwag",
         fr: "Poliwag",
         de: "Poliwag",
         es: "Poliwag",
         it: "Poliwag",
         pt: "Poliwag",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [60],
      hp: 40,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Water Gun",
            ja: "ウォーターガン",
            fr: "Pistolet à eau",
            de: "Wasserpistole",
            es: "Pistola de agua",
            it: "Pistola ad acqua",
            pt: "Pistola de água",
          },
          effect: {
            en: "Does 10 damage plus 10 more damage for each Water Energy attached to Poliwag but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
            ja: "Poliwagに取り付けられた各水エネルギーに対して10ダメージに加えて10ダメージを加えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
            fr: "Fait 10 dégâts plus 10 dommages supplémentaires pour chaque énergie d'eau attachée à Poliwag, mais pas utilisé pour payer le coût énergétique de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette manière.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jede an Poliwag verbundene Wasserergie, aber nicht zur Bezahlung der Energiekosten dieses Angriffs. Auf diese Weise können Sie nicht mehr als 20 Schäden hinzufügen.",
            es: "Hace 10 daños más 10 daños más por cada energía de agua unida a Poliwag pero no se usa para pagar el costo de energía de este ataque. No puede agregar más de 20 daños de esta manera.",
            it: "Fa 10 danni più 10 danni in più per ogni energia idrica attaccata a Poliwag ma non utilizzata per pagare il costo energetico di questo attacco. Non puoi aggiungere più di 20 danni in questo modo.",
            pt: "10 danos mais 10 mais danos para cada energia da água anexada ao Poliwag, mas não costumava pagar pelo custo de energia desse ataque. Você não pode adicionar mais de 20 danos dessa maneira.",
          },
          damage: None,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          subtype: "shadowless",
        },
        {
          type: "normal",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};
