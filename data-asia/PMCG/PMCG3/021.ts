import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Omastar",
         ja: "Omastar",
         fr: "Omastar",
         de: "Omastar",
         es: "OmaStar",
         it: "Omastar",
         pt: "OMASTAR",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [139],
      hp: 70,
      types: ["Water"],
      stage: "Stage2",

      attacks: [
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
            en: "Does 20 damage plus 10 more damage for each Water Energy attached to Omastar but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
            ja: "20ダメージに加えて、Omastarに付着した各水エネルギーに対してさらに10ダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
            fr: "Fait 20 dégâts plus 10 dommages supplémentaires pour chaque énergie d'eau attachée à Omastar, mais pas utilisé pour payer le coût énergétique de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette manière.",
            de: "Fügt 20 Schäden plus 10 weitere Schäden für jede an Omastar verbundene Wasserergie, aber nicht zur Bezahlung der Energiekosten dieses Angriffs. Auf diese Weise können Sie nicht mehr als 20 Schäden hinzufügen.",
            es: "Hace 20 daños más 10 daños más por cada energía de agua unida a OmaStar, pero no se usa para pagar el costo de energía de este ataque. No puede agregar más de 20 daños de esta manera.",
            it: "Fa 20 danni più 10 danni per ogni energia idrica attaccata a Omastar ma non è usato per pagare il costo energetico di questo attacco. Non puoi aggiungere più di 20 danni in questo modo.",
            pt: "Causa 20 danos mais 10 mais danos para cada energia da água ligada ao OMASTAR, mas não costumava pagar pelo custo de energia desse ataque. Você não pode adicionar mais de 20 danos dessa maneira.",
          },
          damage: None,
        },
        {
          cost: ["Water", "Water"],
          name: {
            en: "Spike Cannon",
            ja: "スパイクキャノン",
            fr: "Canon à pointe",
            de: "Spike -Kanone",
            es: "Cañón de espiga",
            it: "Cannone a spike",
            pt: "Canhão de spike",
          },
          effect: {
            en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
            fr: "Flip 2 pièces. Cette attaque fait 30 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 30 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 30 danni volte al numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 30 danos vezes o número de cabeças.",
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
          stamp: ["1st edition"],
        },
      ],
};
