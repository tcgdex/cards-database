import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Drowzee",
         ja: "ドロージー",
         fr: "Drowzee",
         de: "Drowzee",
         es: "Drowzee",
         it: "Drowzee",
         pt: "Drowzee",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [96],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
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
            en: "Flip a coin. If heads, choose 1 of your opponent's Benched Pokemon and switch the Defending Pokemon with it. The new Defending Pokemon is now Asleep.",
            ja: "コインをひっくり返します。頭の場合は、対戦相手のベンチポケモンの1つを選択し、防御ポケモンをそれで切り替えます。新しい防御ポケモンは今眠っています。",
            fr: "Retourner une pièce. Si les têtes, choisissez 1 des pokémon bancés de votre adversaire et changez avec le Pokémon en défense. Le nouveau Pokémon défendant est maintenant endormi.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, wählen Sie 1 des Pokemon Ihres Gegners und schalten Sie das verteidigende Pokémon damit. Das neue verteidigende Pokemon schläft jetzt.",
            es: "Voltea una moneda. Si se dirige, elija 1 de los Pokémon de banca de su oponente y cambie el Pokémon defensor con él. El nuevo Pokémon defensor ahora está dormido.",
            it: "Capovolgi una moneta. Se le teste, scegli 1 del Pokemon in panchina del tuo avversario e cambia il Pokemon in difesa con esso. Il nuovo Pokemon in carica è ora addormentato.",
            pt: "Vire uma moeda. Se as cabeças, escolha 1 do Pokémon bancado do seu oponente e troque o Pokémon defensor com ele. O novo Pokémon atual está agora dormindo.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
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
