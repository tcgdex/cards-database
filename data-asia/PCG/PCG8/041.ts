import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Jirachi ex",
         ja: "ジラチEx",
         fr: "Jirachi ex",
         de: "Jirachi Ex",
         es: "Jirachi ex",
         it: "Jirachi Ex",
         pt: "Jirachi Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [385],
      hp: 90,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Star Light",
            ja: "星光",
            fr: "Lumière étoilée",
            de: "Sternlicht",
            es: "Luz estrella",
            it: "Luce stellare",
            pt: "Star Light",
          },
          effect: {
            en: "As long as your opponent has any PokÃ©mon-ex or Stage 2 Evolved PokÃ©mon in play, Jirachi ex pays {{e}} less Energy to use Shield Beam or Super Psy Bolt.",
            ja: "対戦相手がPokã©Mon-ExまたはStage 2 EvolvedPokã©Mon in Playを持っている限り、Jirachi Exは{{e}}シールドビームまたはスーパーPSYボルトを使用するエネルギーを少なくします。",
            fr: "Tant que votre adversaire a un pokã © lun-ex ou étape 2 Pokã © Mon en jeu, Jirachi ex paie {{e}} moins d'énergie pour utiliser le faisceau de bouclier ou le boulon super psy.",
            de: "Solange Ihr Gegner einen Poké-Mon-Ex oder Stufe 2 hat, wird Jirachi Ex {{e}} weniger Energie für den Schildstrahl oder den Super-Psy-Bolzen zahlt.",
            es: "Mientras tu oponente tenga algún Poké Mon-Ex o Stage 2 evolucionado Poké Mon en juego, Jirachi ex paga {{e}} menos energía para usar un haz de escudo o súper perno psy.",
            it: "Finché il tuo avversario ha qualche poké mon-ex o stadio 2 evoluto poké mon in gioco, Jirachi ex paga {{e}} meno energia per usare il raggio di scudo o il bullone Super Psy.",
            pt: "Enquanto o seu oponente tiver qualquer Poké Mon-Ex ou estágio 2 evoluído Poké-Mon em jogo, Jirachi ex paga {{e}} menos energia para usar o feixe de escudo ou o Super Psy Bolt.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Shield Beam",
            ja: "シールドビーム",
            fr: "Bouclier poutre",
            de: "Schildstrahl",
            es: "Haz de escudo",
            it: "Raggio di scudo",
            pt: "Feixe de escudo",
          },
          effect: {
            en: "During your opponent's next turn, your opponent can't use any Poké-Powers on his or her Pokemon.",
            ja: "対戦相手の次のターン中、対戦相手はポケモンにポケパワーを使用できません。",
            fr: "Au cours du prochain tour de votre adversaire, votre adversaire ne peut pas utiliser de poké-powers sur son pokemon.",
            de: "Während der nächsten Wende Ihres Gegners kann Ihr Gegner keine Poké-Powers für sein Pokémon verwenden.",
            es: "Durante el próximo turno de tu oponente, tu oponente no puede usar ningún Poké-Powers en su Pokémon.",
            it: "Durante il prossimo turno del tuo avversario, il tuo avversario non può usare i powers Poké sul suo Pokemon.",
            pt: "Durante o próximo turno do seu oponente, seu oponente não pode usar nenhum poké em seu Pokémon.",
          },
          damage: 30,
        },
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Super Psy Bolt",
            ja: "スーパーPSYボルト",
            fr: "Boulon super psy",
            de: "Super Psy Bolt",
            es: "Super Psy Bolt",
            it: "Super Psy Bolt",
            pt: "Super Psy Bolt",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
