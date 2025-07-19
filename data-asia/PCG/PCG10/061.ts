import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Skarmory ex",
         ja: "Skarmory Ex",
         fr: "Skarmory ex",
         de: "Skarmory ex",
         es: "Skarmory Ex",
         it: "Skarmory ex",
         pt: "Skarmory Ex",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [227],
      hp: 100,
      types: ["Metal"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Metal Gravity",
            ja: "金属重力",
            fr: "Gravité métallique",
            de: "Metall Schwerkraft",
            es: "Gravedad metálica",
            it: "Gravità metallica",
            pt: "Gravidade metálica",
          },
          effect: {
            en: "If your opponent's Active PokÃ©mon retreats and has 40 or more remaining HP, put 3 damage counters on that PokÃ©mon. You can't use more than 1 Metal Gravity PokÃ©-Body each turn.",
            ja: "対戦相手のアクティブなPokã©Mon Retreatsが残り40以上のHPがある場合は、そのPokã©Monに3つのダメージカウンターを入れます。 1ターンを1ターン以上使用することはできません。",
            fr: "Si Pokã © Mon actif de votre adversaire se retire et a 40 HP ou plus, mettez 3 compteurs de dégâts sur ce pokã © lun. Vous ne pouvez pas utiliser plus d'un poké de gravité métallique à chaque tour.",
            de: "Wenn der aktive Poké -Mon -Retreats Ihres Gegners und 40 oder mehr HP hat, legen Sie 3 Schadenszähler auf diesen Poké © Mon. Sie können nicht mehr als 1 Metall-Schwerkraft-Poké-Körper in jeder Runde verwenden.",
            es: "Si el Poké Mon activo de tu oponente se retira y tiene 40 o más HP restantes, coloque 3 contadores de daño en ese Poké Mon. No puede usar más de 1 gravedad de metal Poké-cuerpo en cada giro.",
            it: "Se il Poké si ritira attivo del tuo avversario e ha 40 o più HP rimanenti, inserisci 3 contatori di danno su quel poké mon. Non è possibile utilizzare più di 1 gravità metallica Pokã © -body ogni turno.",
            pt: "Se o Poké de Mon ativo do seu oponente tiver 40 ou mais HP restante, coloque 3 contadores de danos nesse poké. Você não pode usar mais de 1 gravidade de metal Poké-corpora a cada turno.",
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
          cost: ["Metal", "Metal", "Colorless"],
          name: {
            en: "Razor Wing",
            ja: "かみそりの翼",
            fr: "Aile de rasoir",
            de: "Rasiererflügel",
            es: "Ala de afeitar",
            it: "Ala del rasoio",
            pt: "Asa de barbear",
          },
          damage: 60,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
