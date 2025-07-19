import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Manectric",
         ja: "マネクリック",
         fr: "Manctrique",
         de: "Männlich",
         es: "Manéctrico",
         it: "Manettrico",
         pt: "Manetric",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [310],
      hp: 80,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Kick Away",
            ja: "蹴ってください",
            fr: "Se retirer",
            de: "Treten",
            es: "Apartar con el pie",
            it: "Calciare via",
            pt: "Chutar",
          },
          effect: {
            en: "Your opponent switches the Defending Pokemon with 1 of his or her Benched Pokemon, if any.",
            ja: "対戦相手は、ベンチ付きポケモンの1つで防御ポケモンを切り替えます。",
            fr: "Votre adversaire change le Pokémon en défense avec un de son Pokémon banc, le cas échéant.",
            de: "Ihr Gegner wechselt das verteidigende Pokémon mit einem seiner oder ihres Bankpokemon, falls vorhanden.",
            es: "Tu oponente cambia al Pokémon defensor con 1 de su Pokémon de banca, si es que hay alguno.",
            it: "Il tuo avversario cambia il Pokemon in difesa con 1 del suo Pokemon in panchina, se presente.",
            pt: "Seu oponente troca o Pokémon atual com 1 de seu Pokémon em banco, se houver.",
          },
          damage: 30,
        },
        {
          cost: ["Lightning", "Lightning", "Colorless"],
          name: {
            en: "Strong Current",
            ja: "強い電流",
            fr: "Courant fort",
            de: "Starker Strom",
            es: "Corriente fuerte",
            it: "Forte corrente",
            pt: "Corrente forte",
          },
          effect: {
            en: "If Manectric has a Pokemon Tool card attached to it, this attack does 20 damage to each of your opponent's Benched Pokemon-ex. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "Manectricにポケモンツールカードが付属している場合、この攻撃は、対戦相手のベンチで20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Si Manectric a une carte à outils Pokémon attachée, cette attaque fait 20 dégâts à chacun des Pokemon-EX de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wenn Manectric eine Pokemon-Werkzeugkarte mit sich bringt, schadet dieser Angriff 20 Schäden an den Bankpokemon-EX Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Si Manectric tiene una tarjeta de herramienta Pokémon unida a ella, este ataque hace 20 daños a cada uno de los Pokémon-EX de banca de su oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Se Manectric ha una scheda utensile Pokemon collegata ad essa, questo attacco fa 20 danni a ciascuno dei Pokemon-Ex in panchina del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Se a Manectric tiver uma placa de ferramenta Pokemon anexada a ele, esse ataque causará 20 danos a cada um dos Pokemon-Ext do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
