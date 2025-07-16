import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Victreebel",
         ja: "Victreebel",
         fr: "Victreebel",
         de: "Victreebel",
         es: "Victreebel",
         it: "Victreebel",
         pt: "Victreebel",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [71],
      hp: 80,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Lure",
            ja: "ルアー",
            fr: "Leurre",
            de: "Locken",
            es: "Señuelo",
            it: "Attira",
            pt: "Atrair",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, choose 1 of them and switch it with his or her Active Pokemon.",
            ja: "対戦相手がベンチポケモンを持っている場合は、1つを選択して、アクティブなポケモンで切り替えます。",
            fr: "Si votre adversaire a des pokémon bancés, choisissez-en 1 et changez-le avec son Pokémon actif.",
            de: "Wenn Ihr Gegner ein Bank -Pokémon hat, wählen Sie 1 davon und wechseln Sie es mit seinem aktiven Pokémon.",
            es: "Si tu oponente tiene algún Pokémon de banca, elige 1 de ellos y cambia con su Pokémon activo.",
            it: "Se il tuo avversario ha dei Pokemon in panchina, scegli uno di loro e cambialo con il suo Pokemon attivo.",
            pt: "Se o seu oponente tiver algum Pokémon em banco, escolha 1 deles e mude -o com seu Pokémon ativo.",
          },
          damage: None,
        },
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Acid",
            ja: "酸",
            fr: "Acide",
            de: "Säure",
            es: "Ácido",
            it: "Acido",
            pt: "Ácido",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon can't retreat during your opponent's next turn.",
            ja: "コインをひっくり返します。頭の場合、防衛ポケモンは相手の次のターン中に退却することはできません。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense ne peut pas se retirer pendant le prochain tour de votre adversaire.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, kann sich das verteidigende Pokemon während der nächsten Runde Ihres Gegners nicht zurückziehen.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor no puede retirarse durante el próximo turno de tu oponente.",
            it: "Capovolgi una moneta. Se le teste, il Pokemon in difesa non può ritirarsi durante il prossimo turno del tuo avversario.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual não pode recuar durante o próximo turno do seu oponente.",
          },
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
