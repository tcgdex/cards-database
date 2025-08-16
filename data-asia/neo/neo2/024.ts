import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Xatu",
         ja: "xatu",
         fr: "Xatu",
         de: "Xatu",
         es: "Xatu",
         it: "Xatu",
         pt: "Xatu",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [178],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Energy Cycle",
            ja: "エネルギーサイクル",
            fr: "Cycle énergétique",
            de: "Energiezyklus",
            es: "Ciclo de energía",
            it: "Ciclo di energia",
            pt: "Ciclo de energia",
          },
          effect: {
            en: "Flip a coin. If heads, choose 1 Energy card attached to the Defending Pokemon and 1 of your opponent's Benched Pokemon. Attach that Energy card to that Pokemon.",
            ja: "コインをひっくり返します。頭の場合は、防御ポケモンに1枚のエネルギーカードを選択し、対戦相手の1枚をベンチポケモンに選択します。そのエネルギーカードをそのポケモンに攻撃します。",
            fr: "Retourner une pièce. Si les têtes, choisissez 1 carte d'énergie attachée au Pokémon en défense et 1 de vos adversaires bancs Pokémon. Attaquez cette carte d'énergie à ce Pokémon.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, wählen Sie 1 Energiemoniemess, die an das verteidigende Pokémon und 1 Ihrer Gegner angeschlossen sind. Greifen Sie diese Energiekarte auf dieses Pokémon an.",
            es: "Voltea una moneda. Si se dirige, elija 1 tarjeta de energía unida al Pokémon defensor y 1 de sus oponentes en banca Pokémon. Ataque esa carta de energía a ese Pokémon.",
            it: "Capovolgi una moneta. Se le teste, scegli 1 carta energetica collegata al Pokemon in carica e 1 dei pokemon in panchina degli avversari. Attacca quella carta energetica a quel pokemon.",
            pt: "Vire uma moeda. Se as cabeças, escolha 1 cartão de energia anexado ao Pokémon atual e 1 de seus oponentes em banco de Pokemon. Ataque esse cartão de energia para esse Pokémon.",
          },
        },
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
            en: "Super Psy",
            ja: "Super Psy",
            fr: "Super psy",
            de: "Super Psy",
            es: "Super psico",
            it: "Super Psy",
            pt: "Super Psy",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
