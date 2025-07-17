import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Persian",
         ja: "暗いペルシャ語",
         fr: "Persan sombre",
         de: "Dunkler Perser",
         es: "Persa oscuro",
         it: "Persiano oscuro",
         pt: "Persa escura",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [53],
      hp: 60,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tempt",
            ja: "誘惑",
            fr: "Tenter",
            de: "Versuchen",
            es: "Tentar",
            it: "Tentare",
            pt: "Tentação",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, flip a coin. If heads, choose 1 of your opponent's Benched Pokemon and switch it with the Defending Pokemon.",
            ja: "相手がベンチ付きポケモンを持っている場合は、コインをひっくり返します。頭の場合は、対戦相手のベンチポケモンの1つを選択し、防御ポケモンで切り替えます。",
            fr: "Si votre adversaire a des pokemon bancés, retournez une pièce. Si les têtes, choisissez 1 des pokemon bancés de votre adversaire et changez-le avec le Pokémon en défense.",
            de: "Wenn Ihr Gegner Pokémon mit Bank hat, drehen Sie eine Münze. Wenn Sie Köpfe haben, wählen Sie 1 des Pokemon Ihres Gegners und schalten Sie es mit dem verteidigenden Pokemon.",
            es: "Si tu oponente tiene algún Pokémon de banca, voltea una moneda. Si se dirige, elija 1 de los Pokémon de banca de su oponente y cambie con el Pokémon defensor.",
            it: "Se il tuo avversario ha un Pokemon in panchina, capovolgi una moneta. Se le teste, scegli 1 del Pokemon in panchina del tuo avversario e cambialo con il Pokemon in difesa.",
            pt: "Se o seu oponente tiver algum Pokémon em banco, vire uma moeda. Se as cabeças, escolha 1 do Pokémon em banco do seu oponente e trocá -lo com o Pokémon defensor.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Poison Claws",
            ja: "毒爪",
            fr: "Griffes empoisonnées",
            de: "Giftkrallen",
            es: "Garras de veneno",
            it: "Artigli velenosi",
            pt: "Garras venenosas",
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
          damage: 10,
        },
      ],


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
