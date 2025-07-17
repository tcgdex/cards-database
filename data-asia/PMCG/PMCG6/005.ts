import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Koga's Zubat",
         ja: "コガのズバット",
         fr: "Zubat de Koga",
         de: "Kogas Zubat",
         es: "Zubat de Koga",
         it: "Koga's Zubat",
         pt: "Zubat de Koga",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [41],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Group Attack",
            ja: "グループ攻撃",
            fr: "Attaque de groupe",
            de: "Gruppenangriff",
            es: "Ataque grupal",
            it: "Attacco di gruppo",
            pt: "Ataque em grupo",
          },
          effect: {
            en: "Does 10 damage times the number of Koga's Zubats you have in play. Before doing damage, you may search your deck for any number of Basic Pokemon named Koga's Zubat and put them onto your Bench. (You can't get more cards with this attack than you have room on your Bench.) If you do, shuffle your deck afterward.",
            ja: "あなたがプレイしているコガのズバットの数の10回のダメージを与えます。ダメージを与える前に、KogaのZubatという名前の任意の数の基本的なポケモンをデッキで検索し、ベンチに置くことができます。 （ベンチにスペースがあるよりも、この攻撃で多くのカードを取得することはできません。）もしそうなら、その後デッキをシャッフルします。",
            fr: "Fait 10 dégâts fois le nombre de zubats de Koga que vous avez en jeu. Avant de faire des dégâts, vous pouvez rechercher votre jeu pour un certain nombre de Pokémon de base nommé Zubat de Koga et les mettre sur votre banc. (Vous ne pouvez pas obtenir plus de cartes avec cette attaque que vous avez de la place sur votre banc.) Si vous le faites, mélanger votre deck par la suite.",
            de: "Hat 10 Schadenszeiten die Anzahl der Koga -Zubats, die Sie im Spiel haben. Bevor Sie Schaden anrichten, können Sie Ihr Deck nach einer beliebigen Anzahl von grundlegenden Pokémon namens Kogas Zubat durchsuchen und sie auf Ihre Bank legen. (Mit diesem Angriff können Sie nicht mehr Karten bekommen, als Sie Platz auf Ihrer Bank haben.) Wenn Sie dies tun, mischen Sie anschließend Ihr Deck.",
            es: "Hace 10 tiempos de daño el número de zubats de Koga que tienes en juego. Antes de hacer daño, puede buscar en su mazo cualquier número de Pokémon básico llamado Koga Zubat y ponerlos en su banco. (No puedes obtener más cartas con este ataque que en tu banco). Si lo haces, baraja tu mazo después.",
            it: "Fa 10 danni volte il numero di Zubat di Koga che hai in gioco. Prima di fare danni, puoi cercare nel tuo mazzo qualsiasi numero di Pokemon di base di nome Koga's Zubat e metterli in panchina. (Non puoi ottenere più carte con questo attacco di quanto non hai spazio sulla panchina.) Se lo fai, mescola il tuo mazzo in seguito.",
            pt: "10 danos vezes o número de zubats de Koga que você tem em jogo. Antes de causar danos, você pode pesquisar seu baralho por qualquer número de Pokemon básico chamado Koga's Zubat e colocá -los em seu banco. (Você não pode obter mais cartas com esse ataque do que tem espaço em seu banco.) Se o fizer, embaralhe seu baralho depois.",
          },
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
