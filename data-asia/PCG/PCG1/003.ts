import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Butterfree",
         ja: "蝶",
         fr: "Papillon",
         de: "Butterfree",
         es: "Libre de mantequilla",
         it: "Butterfree",
         pt: "Sem borboleta",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [12],
      hp: 100,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Sooth Dust",
            ja: "ほこりをなだめる",
            fr: "Poussière",
            de: "Beruhigender Staub",
            es: "Polvo calmante",
            it: "Sooth polvere",
            pt: "Sooth poeira",
          },
          effect: {
            en: "As long as Butterfree is your Active PokÃ©mon, remove 1 damage counter from each of your PokÃ©mon between turns.",
            ja: "バタフリーがアクティブなポカモンである限り、ターン間の各ポカモンから1つのダメージカウンターを1つのダメージカウンターを削除します。",
            fr: "Tant que Butterfree est votre poké actif, retirez 1 compteur de dégâts de chacun de votre poké entre les virages.",
            de: "Entfernen Sie 1 Schadenschalter von jedem Ihrer Poké Mon zwischen den Kurven, solange das Butterfree Ihr aktives Pokémon ist.",
            es: "Mientras ButterFree esté bien activo Poké Mon, retire 1 contador de daño de cada uno de sus Poké Mon entre turnos.",
            it: "Finché Butterfree è il tuo poké attivo, rimuovi 1 contatore di danni da ciascuno dei tuoi poké tra i turni.",
            pt: "Enquanto sem borboleta for o seu Poké ativo, remova 1 contador de danos de cada um dos seus Poké entre turnos.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Whirlwind",
            ja: "旋風",
            fr: "Tourbillon",
            de: "Wirbelwind",
            es: "Torbellino",
            it: "Turbine",
            pt: "Turbilhão",
          },
          effect: {
            en: "Your opponent switches the Defending Pokemon with 1 of his or her Benched Pokemon.",
            ja: "対戦相手は、ディフェンディングポケモンを1匹のベンチポケモンで切り替えます。",
            fr: "Votre adversaire change le Pokémon en défense avec un de son Pokémon bancté.",
            de: "Ihr Gegner wechselt das verteidigende Pokémon mit einem seiner oder ihres Bankpokémon.",
            es: "Tu oponente cambia al Pokémon defensor con 1 de su Pokémon de banca.",
            it: "Il tuo avversario cambia il Pokemon in difesa con 1 del suo Pokemon in panchina.",
            pt: "Seu oponente troca o Pokémon atual com 1 de seu Pokémon em banco.",
          },
          damage: 30,
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Gust",
            ja: "突風",
            fr: "Rafale",
            de: "Böe",
            es: "Ráfaga",
            it: "Raffica",
            pt: "Rajada",
          },
          damage: 50,
        },
      ],


      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
