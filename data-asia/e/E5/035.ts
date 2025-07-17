import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Delibird",
         ja: "Delibird",
         fr: "Déliber",
         de: "Delibird",
         es: "Parrilla",
         it: "Delird",
         pt: "Delibird",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [225],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Limited Delivery",
            ja: "限られた配達",
            fr: "Livraison limitée",
            de: "Begrenzte Lieferung",
            es: "Entrega limitada",
            it: "Consegna limitata",
            pt: "Entrega limitada",
          },
          effect: {
            en: "Search your deck for a Technical Machine or Pokemon Tool card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
            ja: "テクニカルマシンまたはポケモンツールカードを検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck pour une machine technique ou une carte à outils Pokemon, affichez-la à votre adversaire et mettez-la dans votre main. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer technischen Maschine oder einer Pokemon -Toolkarte, zeigen Sie sie Ihrem Gegner an und geben Sie sie in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una máquina técnica o una tarjeta de herramienta Pokemon, muéstrela a su oponente y póngalo en su mano. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una macchina tecnica o una scheda utensile Pokemon, mostralo al tuo avversario e mettilo in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho em busca de uma máquina técnica ou cartão de ferramenta Pokemon, mostre -o ao seu oponente e coloque -o em sua mão. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Water", "Colorless"],
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
            en: "Your opponent switches the Defending Pokemon with 1 of his or her Benched Pokemon, if any. (Do the damage before switching the Pokemon.)",
            ja: "対戦相手は、ベンチ付きポケモンの1つで防御ポケモンを切り替えます。 （ポケモンを切り替える前にダメージを与えます。）",
            fr: "Votre adversaire change le Pokémon en défense avec un de son Pokémon banc, le cas échéant. (Faites les dégâts avant de changer le pokemon.)",
            de: "Ihr Gegner wechselt das verteidigende Pokémon mit einem seiner oder ihres Bankpokemon, falls vorhanden. (Führen Sie den Schaden an, bevor Sie das Pokémon wechseln.)",
            es: "Tu oponente cambia al Pokémon defensor con 1 de su Pokémon de banca, si es que hay alguno. (Haz el daño antes de cambiar el Pokémon).",
            it: "Il tuo avversario cambia il Pokemon in difesa con 1 del suo Pokemon in panchina, se presente. (Fai il danno prima di cambiare il Pokemon.)",
            pt: "Seu oponente troca o Pokémon atual com 1 de seu Pokémon em banco, se houver. (Faça o dano antes de mudar o Pokemon.)",
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
