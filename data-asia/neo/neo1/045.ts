import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Slowpoke",
         ja: "slowpoke",
         fr: "Lambin",
         de: "Langweiler",
         es: "Perezoso",
         it: "Slowpoke",
         pt: "Slowpoke",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [79],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Psyshock",
            ja: "PsyShock",
            fr: "Psychock",
            de: "Psyshock",
            es: "Psíquico",
            it: "Psyshock",
            pt: "Psyshock",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 10,
        },
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
            en: "Does 10 damage plus 10 more damage for each Water Energy attached to Slowpoke but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
            ja: "10ダメージに加えて、スローポークに付着した水エネルギーごとに10ダメージを加えて10ダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
            fr: "Fait 10 dégâts plus 10 dommages supplémentaires pour chaque énergie d'eau attachée à SlowPoke mais pas utilisé pour payer le coût énergétique de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette manière.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jede an Slowpoke befestigte Wasserergie, aber nicht zur Bezahlung der Energiekosten dieses Angriffs. Auf diese Weise können Sie nicht mehr als 20 Schäden hinzufügen.",
            es: "Hace 10 daños más 10 daños más por cada energía de agua unida a SlowPoke pero no se usa para pagar el costo de energía de este ataque. No puede agregar más de 20 daños de esta manera.",
            it: "Fa 10 danni più 10 danni per ogni energia idrica attaccata a Slowpoke ma non è usato per pagare il costo energetico di questo attacco. Non puoi aggiungere più di 20 danni in questo modo.",
            pt: "10 danos mais 10 mais danos para cada energia da água ligada ao SlowPoke, mas não costumava pagar pelo custo de energia desse ataque. Você não pode adicionar mais de 20 danos dessa maneira.",
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
