import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Seadra",
         ja: "シードラ",
         fr: "Seadra",
         de: "Seadra",
         es: "Seadra",
         it: "Seadra",
         pt: "Seadra",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [117],
      hp: 60,
      types: ["Water"],
      stage: "Stage1",

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
            en: "Does 20 damage plus 10 more damage for each Water Energy attached to Seadra but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
            ja: "20ダメージに加えて、シードラに付着した各水エネルギーに対してさらに10ダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
            fr: "Fait 20 dégâts plus 10 dommages supplémentaires pour chaque énergie d'eau attachée à Seadra mais pas utilisé pour payer le coût énergétique de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette manière.",
            de: "Fügt 20 Schäden plus 10 weitere Schäden für jede an Seadra befestigte Wasserergie, aber nicht zur Bezahlung der Energiekosten dieses Angriffs. Auf diese Weise können Sie nicht mehr als 20 Schäden hinzufügen.",
            es: "Hace 20 daños más 10 daños más por cada energía de agua unida a Seadra, pero no se usa para pagar el costo de energía de este ataque. No puede agregar más de 20 daños de esta manera.",
            it: "Fa 20 danni più 10 danni per ogni energia idrica attaccata a Seadra ma non è abituata a pagare per il costo energetico di questo attacco. Non puoi aggiungere più di 20 danni in questo modo.",
            pt: "20 danos mais 10 mais danos para cada energia da água anexada a Seadra, mas não costumava pagar pelo custo de energia desse ataque. Você não pode adicionar mais de 20 danos dessa maneira.",
          },
          damage: None,
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Agility",
            ja: "敏ility性",
            fr: "Agilité",
            de: "Beweglichkeit",
            es: "Agilidad",
            it: "Agilità",
            pt: "Agilidade",
          },
          effect: {
            en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Seadra.",
            ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、シードラに行われたダメージを含む攻撃のすべての影響を防ぎます。",
            fr: "Retourner une pièce. Si les têtes, lors du prochain tour de votre adversaire, empêchent tous les effets des attaques, y compris les dégâts, faites à Seadra.",
            de: "Eine Münze drehen. Wenn Köpfe während der nächsten Runde Ihres Gegners alle Auswirkungen von Angriffen, einschließlich Schäden an Seadra, verhindern.",
            es: "Voltea una moneda. Si las cabezas, durante el próximo turno de tu oponente, evitan que todos los efectos de los ataques, incluido el daño, se hagan a Seadra.",
            it: "Capovolgi una moneta. Se le teste, durante il prossimo turno dell'avversario, impediscono a tutti gli effetti degli attacchi, inclusi i danni, fatti a Seadra.",
            pt: "Vire uma moeda. Se as cabeças, durante o próximo turno do seu oponente, impedem todos os efeitos dos ataques, incluindo danos, feitos a Seadra.",
          },
          damage: 20,
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
