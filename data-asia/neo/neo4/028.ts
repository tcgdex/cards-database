import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Totodile",
         ja: "totodile",
         fr: "Totodile",
         de: "Totodil",
         es: "Totodile",
         it: "Totodile",
         pt: "Totodile",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [158],
      hp: 50,
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
            en: "Does 10 damage plus 10 more damage for each Water Energy attached to Totodile but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
            ja: "10ダメージに加えて、Totodileに付着した各水エネルギーに対してさらに10ダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
            fr: "Fait 10 dégâts plus 10 dommages supplémentaires pour chaque énergie d'eau attachée à Totodile mais pas utilisé pour payer le coût énergétique de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette manière.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jede an Totodile befestigte Wasserergie, aber nicht zur Bezahlung der Energiekosten dieses Angriffs. Auf diese Weise können Sie nicht mehr als 20 Schäden hinzufügen.",
            es: "Hace 10 daños más 10 daños más por cada energía de agua unida a Totodile, pero no se usa para pagar el costo de energía de este ataque. No puede agregar más de 20 daños de esta manera.",
            it: "Fa 10 danni più 10 danni per ogni energia idrica attaccata al totodile ma non è usato per pagare il costo energetico di questo attacco. Non puoi aggiungere più di 20 danni in questo modo.",
            pt: "10 danos mais 10 mais danos para cada energia da água ligada a Totodile, mas não costumava pagar pelo custo de energia desse ataque. Você não pode adicionar mais de 20 danos dessa maneira.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
