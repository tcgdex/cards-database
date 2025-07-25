import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Kabutops - 057/088",
         ja: "Kabutops -057/088",
         fr: "Kabutops - 057/088",
         de: "Kabutops - 057/088",
         es: "Kabutops - 057/088",
         it: "Kabutops - 057/088",
         pt: "Kabutops - 057/088",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [141],
      hp: 90,
      types: ["Fighting"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Primal Aura",
            ja: "原始オーラ",
            fr: "Aura primitive",
            de: "Uraura",
            es: "Aura primaria",
            it: "Aura primordiale",
            pt: "Aura primordial",
          },
          effect: {
            en: "As long as Kabutops is your Active Pokmon, neither player can play Basic Pokmon or Evolution cards from his or her hand to evolve Benched Pokmon.",
            ja: "Kabutopsがあなたのアクティブなポクモンである限り、どちらのプレイヤーも、ベンチでベンチポクモンを進化させるために彼または彼女の手から基本的なポクモンカードや進化カードをプレイすることはできません。",
            fr: "Tant que Kabutops est votre Pokmon actif, aucun des joueurs ne peut jouer à des cartes de base de pokmon ou d'évolution de sa main pour évoluer Pokmon banc.",
            de: "Solange Kabutops Ihr aktives Pokmon ist, kann kein Spieler einfaches Pokmon- oder Evolutionskarten von seiner Hand spielen, um Pokmon zu entwickeln.",
            es: "Mientras Kabutops sea tu Pokmon activo, ninguno de los jugadores puede jugar pokmon básico o cartas de evolución de su mano para evolucionar Pokmon en banca.",
            it: "Finché Kabutops è il tuo Pokmon attivo, nessuno dei due giocatori può giocare a carte Pokmon di base o Evolution dalla sua mano per evolvere Pokmon in panchina.",
            pt: "Enquanto Kabutops for o seu Pokmon ativo, nenhum dos jogadores pode jogar cartas básicas de Pokmon ou Evolution de sua mão para evoluir Pokmon com bancada.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Dual Cut",
            ja: "デュアルカット",
            fr: "Double",
            de: "Doppelschnitt",
            es: "Corte dual",
            it: "Doppio taglio",
            pt: "Corte duplo",
          },
          effect: {
            en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の50回のダメージ時間を実行します。",
            fr: "Flip 2 pièces. Cette attaque fait 50 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 50 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 50 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 50 danni volte il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 50 danos vezes o número de cabeças.",
          },
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
