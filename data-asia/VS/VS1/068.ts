import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Brock's Omastar",
         ja: "ブロックのomastar",
         fr: "Omastar de Brock",
         de: "Brocks Omastar",
         es: "OmaStar de Brock",
         it: "Brock's Omastar",
         pt: "OMASTAR DE BROCK",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [139],
      hp: 70,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Stretch Tentacle",
            ja: "ストレッチ触手",
            fr: "Tentacule d'étirement",
            de: "Tentakel Stretch",
            es: "Tentáculo estirado",
            it: "Allungare il tentacolo",
            pt: "Tentáculo de alongamento",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, choose 1 of them and switch it with the Defending Pokemon.",
            ja: "対戦相手がベンチポケモンを持っている場合は、それらの1つを選択し、防御ポケモンで切り替えます。",
            fr: "Si votre adversaire a des pokemon bancés, choisissez-en 1 et changez-le avec le Pokémon en défense.",
            de: "Wenn Ihr Gegner ein Bank -Pokémon hat, wählen Sie 1 davon und wechseln Sie es mit dem verteidigenden Pokemon.",
            es: "Si tu oponente tiene algún Pokémon de banca, elige 1 de ellos y cambia con el Pokémon defensor.",
            it: "Se il tuo avversario ha dei Pokemon in panchina, scegline 1 e cambialo con il Pokemon in difesa.",
            pt: "Se o seu oponente tiver algum Pokémon em banco, escolha 1 deles e mude -o com o Pokémon defensivo.",
          },
        },
        {
          cost: ["Fighting", "Fighting"],
          name: {
            en: "Poison Tentacles",
            ja: "毒の触手",
            fr: "Tentacules empoisonnés",
            de: "Gifttentakel",
            es: "Tentáculos venenosos",
            it: "Tentacoli velenosi",
            pt: "Poison Tentacles",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Poisoned.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné.",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt vergiftet.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está envenenado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora avvelenato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está envenenado.",
          },
          damage: 20,
        },
      ],

      retreat: 2,

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
