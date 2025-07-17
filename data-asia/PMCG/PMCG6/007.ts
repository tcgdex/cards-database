import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Koga's Grimer",
         ja: "コガのグリマー",
         fr: "Koga's Grimer",
         de: "Kogas Grimer",
         es: "Grimer de Koga",
         it: "Koga's Grimer",
         pt: "Koga's Grimer",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [88],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Sludge Grip",
            ja: "スラッジグリップ",
            fr: "Poignée de boues",
            de: "Schlammgriff",
            es: "Agarre de lodo",
            it: "Grip di fanghi",
            pt: "Aperto de lodo",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, flip a coin. If heads, choose 1 of your opponent's Benched Pokemon and switch it with the Defending Pokemon. The new Defending Pokemon is now Poisoned.",
            ja: "相手がベンチ付きポケモンを持っている場合は、コインをひっくり返します。頭の場合は、対戦相手のベンチポケモンの1つを選択し、防御ポケモンで切り替えます。新しい防御ポケモンは現在毒されています。",
            fr: "Si votre adversaire a des pokemon bancés, retournez une pièce. Si les têtes, choisissez 1 des pokemon bancés de votre adversaire et changez-le avec le Pokémon en défense. Le nouveau Pokémon défendant est maintenant empoisonné.",
            de: "Wenn Ihr Gegner Pokémon mit Bank hat, drehen Sie eine Münze. Wenn Sie Köpfe haben, wählen Sie 1 des Pokemon Ihres Gegners und schalten Sie es mit dem verteidigenden Pokemon. Das neue verteidigende Pokemon ist jetzt vergiftet.",
            es: "Si tu oponente tiene algún Pokémon de banca, voltea una moneda. Si se dirige, elija 1 de los Pokémon de banca de su oponente y cambie con el Pokémon defensor. El nuevo Pokémon defensor ahora está envenenado.",
            it: "Se il tuo avversario ha un Pokemon in panchina, capovolgi una moneta. Se le teste, scegli 1 del Pokemon in panchina del tuo avversario e cambialo con il Pokemon in difesa. Il nuovo Pokemon in carica è ora avvelenato.",
            pt: "Se o seu oponente tiver algum Pokémon em banco, vire uma moeda. Se as cabeças, escolha 1 do Pokémon em banco do seu oponente e trocá -lo com o Pokémon defensor. O novo Pokémon atual está agora envenenado.",
          },
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Sludge Toss",
            ja: "スラッジトス",
            fr: "Lancer des boues",
            de: "Schlammwurf",
            es: "Lanzar lodos",
            it: "Lancio di fanghi",
            pt: "Lodo",
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
