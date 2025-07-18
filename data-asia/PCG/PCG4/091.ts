import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Umbreon ex",
         ja: "Umbreon ex",
         fr: "Umbreon ex",
         de: "Umbreon ex",
         es: "Umbreon ex",
         it: "Umbreon Ex",
         pt: "Umbreon Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [197],
      hp: 110,
      types: ["Darkness"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Darker Ring",
            ja: "暗いリング",
            fr: "Bague plus foncée",
            de: "Dunklerer Ring",
            es: "Anillo más oscuro",
            it: "Anello più scuro",
            pt: "Anel mais escuro",
          },
          effect: {
            en: "Once during your turn (before your attack), when you play Umbreon ex from your hand to evolve 1 of your PokÃ©mon, switch 1 of your opponent's Benched PokÃ©mon with 1 of the Defending PokÃ©mon. Your opponent chooses the Defending PokÃ©mon to switch.",
            ja: "ターン中（攻撃の前に）、あなたがあなたの手からUmbreon Exをプレイするとき、あなたのポカモンの1つを進化させるとき、あなたの対戦相手のベンチされたポカモンの1つのスイッチ1を防御するポカモンの1つと、対戦相手は、防御するポカモンを選択して切り替えます。",
            fr: "Une fois pendant votre tour (avant votre attaque), lorsque vous jouez à Umbreon Ex de votre main pour évoluer 1 de votre poké mon, changez 1 de Pokã © Mon de votre adversaire avec le Poké en défense. Votre adversaire choisit le Poké en défense pour changer.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff), wenn Sie umbreon ex von Ihrer Hand spielen, können Sie 1 Ihres Poké Mons entwickeln, wechseln Sie 1 der poké mon Ihres Gegners mit 1 der verteidigenden Pokémon. Ihr Gegner wählt den verteidigenden Poké Mon Mon, um zu wechseln.",
            es: "Una vez durante su turno (antes de su ataque), cuando juegas Umbreon Ex de tu mano para evolucionar 1 de tu Poké Mon, cambia 1 de la banca de tu oponente Poké Mon con 1 de la defensora de Mon. Tu oponente elige al Poké Mon defensor para cambiar.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), quando giochi a Umbreon Ex dalla tua mano per evolvere 1 del tuo poké mon, cambia 1 del poké in panchina del tuo avversario con 1 del poké mon. Il tuo avversario sceglie il poké in difesa da cambiare.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), quando você toca umbreon ex da sua mão para evoluir 1 do seu Poké Mon, alterne 1 do Poké -Mon em bancada do seu oponente. Seu oponente escolhe o Poké Mon em defesa para mudar.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Black Cry",
            ja: "ブラッククライ",
            fr: "Cri noir",
            de: "Schwarzer Schrei",
            es: "Grito negro",
            it: "Cry nero",
            pt: "Cry preto",
          },
          effect: {
            en: "The Defending Pokemon can't retreat or use any Poké-Powers during your opponent's next turn.",
            ja: "防御するポケモンは、相手の次のターン中にポケパワーを退却したり、使用したりすることはできません。",
            fr: "Le Pokémon en défense ne peut pas se retirer ou utiliser des poké-powers pendant le prochain tour de votre adversaire.",
            de: "Das verteidigende Pokémon kann in der nächsten Runde Ihres Gegners keine Poké-Powers zurückziehen oder verwenden.",
            es: "El Pokémon defensor no puede retirarse ni usar ningún Poké-Power durante el próximo turno de tu oponente.",
            it: "Il Pokemon in carica non può ritirarsi o utilizzare i Poké-Powers durante il prossimo turno del tuo avversario.",
            pt: "O Pokémon atual não pode recuar ou usar nenhum poké de poké durante o próximo turno do seu oponente.",
          },
          damage: 20,
        },
        {
          cost: ["Darkness", "Colorless", "Colorless"],
          name: {
            en: "Darkness Fang",
            ja: "闇の牙",
            fr: "Croc de l'obscurité",
            de: "Dunkelheit Fang",
            es: "Camiseta de oscuridad",
            it: "Darkness Fang",
            pt: "Escuridão presa",
          },
          damage: 60,
        },
      ],

      retreat: 1,

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
