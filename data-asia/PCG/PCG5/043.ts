import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Wobbuffet",
         ja: "ウォブバフェット",
         fr: "Wobbuffet",
         de: "Wobbuffet",
         es: "Wobbuffet",
         it: "Wobbuffet",
         pt: "Wobbuffet",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [202],
      hp: 80,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Stages of Evolution",
            ja: "進化の段階",
            fr: "Étapes de l'évolution",
            de: "Evolutionsphasen",
            es: "Etapas de evolución",
            it: "Fase dell'evoluzione",
            pt: "Estágios da evolução",
          },
          effect: {
            en: "As long as Wobbuffet is an Evolved PokÃ©mon, your opponent pays {{e}} more to retreat his or her Active PokÃ©mon.",
            ja: "Wobbuffetが進化したポカモンである限り、あなたの対戦相手は彼または彼女のアクティブなPokã©Monを後退させるために{{e}}をより多く支払います。",
            fr: "Tant que Wobbuffet est un pokã © mon évolué, votre adversaire paie {{e}} plus pour retirer son poké actif.",
            de: "Solange Wobbuffet ein weiterentwickeltes Pokémon ist, zahlt Ihr Gegner {{e}} mehr, um seinen aktiven Poké mon zurückzuziehen.",
            es: "Mientras Wobbuffet sea un Poké Mon evolucionado, su oponente paga {{E}} más para retirarse su Poké activo.",
            it: "Finché Wobbuffet è un poké evoluto mon, il tuo avversario paga {{e}} di più per ritirare il suo poké attivo.",
            pt: "Enquanto Wobbuffet for um Poké -Mon evoluído, seu oponente paga {{e}} mais para recuar seu Poké de Mon ativo.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Grind",
            ja: "粉砕",
            fr: "Moudre",
            de: "Schleifen",
            es: "Moler",
            it: "Macinare",
            pt: "Moer",
          },
          effect: {
            en: "Does 10 damage times the amount of Energy attached to Wobbuffet.",
            ja: "Wobbuffetに取り付けられたエネルギーの量を10回ダメージします。",
            fr: "Fait 10 dégâts fois la quantité d'énergie attachée à Wobbuffet.",
            de: "Schädigt 10 Schadenszeiten der an Wobbuffet verbundenen Energie.",
            es: "Hace 10 tiempos de daño la cantidad de energía unida a Wobbuffet.",
            it: "Fa 10 danni volte la quantità di energia attaccata a Wobbuffet.",
            pt: "10 danos vezes a quantidade de energia ligada ao wobbuffet.",
          },
        },
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
            en: "Shadow Tag",
            ja: "シャドウタグ",
            fr: "Étiquette d'ombre",
            de: "Schatten -Tag",
            es: "Etiqueta de sombra",
            it: "Tag ombra",
            pt: "Tag de sombra",
          },
          effect: {
            en: "Put 7 damage counters on the Defending Pokemon at the end of your opponent's next turn.",
            ja: "対戦相手の次のターンの終わりに、防御ポケモンに7つのダメージカウンターを置きます。",
            fr: "Mettez 7 compteurs de dégâts sur le Pokémon en défense à la fin du prochain tour de votre adversaire.",
            de: "Legen Sie am Ende der nächsten Runde Ihres Gegners 7 Schadenszähler auf das verteidigende Pokémon.",
            es: "Ponga 7 contadores de daño en el Pokémon defensor al final del próximo turno de tu oponente.",
            it: "Metti 7 contatori di danno sul Pokemon in carica alla fine del prossimo turno dell'avversario.",
            pt: "Coloque 7 contadores de danos no Pokémon atual no final do próximo turno do seu oponente.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
