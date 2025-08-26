import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Psyduck",
         ja: "Psyduck",
         fr: "Psyde",
         de: "Psyduck",
         es: "Psíquico",
         it: "Psyduck",
         pt: "Psyduck",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [54],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Dizziness",
            ja: "めまい",
            fr: "Vertiges",
            de: "Schwindel",
            es: "Mareo",
            it: "Vertigini",
            pt: "Tontura",
          },
          effect: {
            en: "Draw a card.",
            ja: "カードを描きます。",
            fr: "Dessinez une carte.",
            de: "Zeichnen Sie eine Karte.",
            es: "Dibuja una carta.",
            it: "Disegna una carta.",
            pt: "Desenhe uma carta.",
          },
        },
        {
          cost: ["Water", "Colorless"],
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
            en: "Does 20 damage plus 10 more damage for each Water Energy attached to Psyduck but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
            ja: "Psyduckに取り付けられた各水エネルギーに対して20のダメージに加えて10のダメージをさらに10回かけますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
            fr: "Fait 20 dégâts plus 10 dommages supplémentaires pour chaque énergie d'eau attachée à Psyduck, mais pas utilisé pour payer le coût énergétique de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette manière.",
            de: "Fügt 20 Schäden plus 10 weitere Schäden für jede an Psyduck befestigte Wasserergie, aber nicht zur Bezahlung der Energiekosten dieses Angriffs. Auf diese Weise können Sie nicht mehr als 20 Schäden hinzufügen.",
            es: "Hace 20 daños más 10 daños más por cada energía de agua unida a Psyduck pero no se usa para pagar el costo de energía de este ataque. No puede agregar más de 20 daños de esta manera.",
            it: "Fa 20 danni più 10 danni per ogni energia idrica attaccata a Psyduck ma non è usato per pagare il costo energetico di questo attacco. Non puoi aggiungere più di 20 danni in questo modo.",
            pt: "Causam 20 danos mais 10 mais danos para cada energia da água ligada ao psyduck, mas não costumava pagar pelo custo de energia desse ataque. Você não pode adicionar mais de 20 danos dessa maneira.",
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
