import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Muk",
         ja: "Muk",
         fr: "Muk",
         de: "Muk",
         es: "Muk",
         it: "Muk",
         pt: "Muk",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [89],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Stench",
            ja: "悪臭",
            fr: "Puanteur",
            de: "Gestank",
            es: "Hedor",
            it: "Fetore",
            pt: "Fedor",
          },
          effect: {
            en: "As long as Muk is your Active PokÃ©mon, each player's PokÃ©mon can't use any PokÃ©-Powers.",
            ja: "MUKがあなたのアクティブなポカモンである限り、各プレイヤーのPokã©MonはPokã©Powersを使用できません。",
            fr: "Tant que Muk est votre poké actif, le poké de chaque joueur ne peut utiliser aucun poké-powers.",
            de: "Solange Muk Ihr aktiver Poké Mon Mon ist, kann der Poké-Mon-Spieler keine Poké-Wächter verwenden.",
            es: "Mientras MUK sea tu Poké Mon activo, el Poké Mon de cada jugador no puede usar ningún Poké.",
            it: "Finché Muk è il tuo poké attivo, il poké di ogni giocatore non può usare alcun poké-powers.",
            pt: "Enquanto Muk for o seu Poké de Mon ativo, o Poké de cada jogador não pode usar nenhum Poké-Powers.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Poison Ring",
            ja: "毒リング",
            fr: "Bague empoisonnée",
            de: "Giftring",
            es: "Anillo de veneno",
            it: "Anello veleno",
            pt: "Anel de veneno",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned. The Defending Pokemon can't retreat during your opponent's next turn.",
            ja: "防御ポケモンは現在中毒になっています。防御するポケモンは、相手の次のターン中に退却することはできません。",
            fr: "Le Pokémon en défense est maintenant empoisonné. Le Pokémon en défense ne peut pas se retirer pendant le prochain tour de votre adversaire.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet. Das verteidigende Pokemon kann sich während der nächsten Runde Ihres Gegners nicht zurückziehen.",
            es: "El Pokémon defensor ahora está envenenado. El Pokémon defensor no puede retirarse durante el próximo turno de tu oponente.",
            it: "Il Pokemon in carica è ora avvelenato. Il Pokemon in carica non può ritirarsi durante il prossimo turno del tuo avversario.",
            pt: "O Pokémon atual agora está envenenado. O Pokémon atual não pode recuar durante o próximo turno do seu oponente.",
          },
          damage: 20,
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Sludge Toss",
            ja: "スラッジトス",
            fr: "Lancer des boues",
            de: "Schlammwurf",
            es: "Lanzar lodos",
            it: "Lancio di fanghi",
            pt: "Lodo",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
