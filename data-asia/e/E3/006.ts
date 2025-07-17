import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Parasect",
         ja: "パラセクト",
         fr: "Parasect",
         de: "Parasitekt",
         es: "Parasecto",
         it: "Paraseto",
         pt: "Parasecto",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [47],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Sleep Inducer",
            ja: "スリープインデューサー",
            fr: "Inducteur du sommeil",
            de: "Schlafinduktor",
            es: "Inductor de sueño",
            it: "Induttore del sonno",
            pt: "Indutor do sono",
          },
          effect: {
            en: "Choose 1 of your opponent's Benched Pokemon and switch the Defending Pokemon with it. The new Defending Pokemon is now Asleep.",
            ja: "対戦相手のベンチ付きポケモンの1つを選択し、防御ポケモンをそれで切り替えます。新しい防御ポケモンは今眠っています。",
            fr: "Choisissez 1 des pokemon bancés de votre adversaire et changez avec le Pokémon en défense. Le nouveau Pokémon défendant est maintenant endormi.",
            de: "Wählen Sie 1 der Bankpokemon Ihres Gegners und wechseln Sie damit das verteidigende Pokémon. Das neue verteidigende Pokemon schläft jetzt.",
            es: "Elija 1 de los Pokémon de banca de su oponente y cambie el Pokémon defensor con él. El nuevo Pokémon defensor ahora está dormido.",
            it: "Scegli 1 del Pokemon in panchina del tuo avversario e cambia il Pokemon in carica con esso. Il nuovo Pokemon in carica è ora addormentato.",
            pt: "Escolha 1 do Pokémon com bancada do seu oponente e mude o Pokémon atual com ele. O novo Pokémon atual está agora dormindo.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Rapture Pollen",
            ja: "歓喜",
            fr: "Enlèvement",
            de: "Entrückungspollen",
            es: "Polen de éxtasis",
            it: "Rapture Polne",
            pt: "Pólen de arrebatamento",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Asleep. If tails, remove 2 damage counters from Parasect.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは今眠っています。テールの場合、ParaSectから2つのダメージカウンターを削除します。",
            fr: "Retourner une pièce. Si la tête, le Pokémon en défense est maintenant endormi. Si les queues, retirez 2 compteurs de dégâts du parasect.",
            de: "Eine Münze drehen. Wenn Köpfe, schläft das verteidigende Pokemon jetzt. Wenn Schwänze, entfernen Sie 2 Schadenszähler aus dem Parasekt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está dormido. Si las colas, retire 2 contadores de daño del parasect.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora addormentato. Se code, rimuovere 2 contatori di danno da paraseta.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está dormindo. Se as caudas, remova 2 contadores de danos do parasecto.",
          },
          damage: 20,
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
