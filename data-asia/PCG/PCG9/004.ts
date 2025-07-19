import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Dragonite ex (Delta Species)",
         ja: "ドラゴナイトex（デルタ種）",
         fr: "Dragonite Ex (espèce delta)",
         de: "Dragonit EX (Delta -Arten)",
         es: "Dragonite ex (especie delta)",
         it: "Dragonite Ex (Delta Species)",
         pt: "Dragonite Ex (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [149],
      hp: 150,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Deafen",
            ja: "defen",
            fr: "Assourdir",
            de: "Taub",
            es: "Ensordecer",
            it: "Sordo",
            pt: "Ensurdecer",
          },
          effect: {
            en: "Your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand during your opponent's next turn.",
            ja: "対戦相手は、対戦相手の次のターン中に手からトレーナーカード（サポーターカードを除く）をプレイできません。",
            fr: "Votre adversaire ne peut jouer aucune cartes d'entraînement (à l'exception des cartes supporters) de sa main pendant le prochain tour de votre adversaire.",
            de: "Ihr Gegner kann während der nächsten Runde Ihres Gegners keine Trainerkarten (außer für Unterstützerkarten) aus seiner Hand spielen.",
            es: "Tu oponente no puede jugar ninguna carta de entrenador (excepto las cartas de partidario) de su mano durante el próximo turno de tu oponente.",
            it: "Il tuo avversario non può giocare a nessuna carta di allenatore (ad eccezione delle carte di sostenitore) dalla sua mano durante il prossimo turno del tuo avversario.",
            pt: "Seu oponente não pode jogar cartas de treinador (exceto as cartas de apoiador) da mão durante a próxima curva do seu oponente.",
          },
          damage: 40,
        },
        {
          cost: ["Grass", "Grass", "Colorless", "Colorless"],
          name: {
            en: "Dragon Roar",
            ja: "ドラゴン・ロア",
            fr: "Rugissement du dragon",
            de: "Dragon Roar",
            es: "Dragón rugido",
            it: "Dragon Roar",
            pt: "Dragon Roar",
          },
          effect: {
            en: "Put 8 damage counters on the Defending Pokemon. If that Pokemon would be Knocked Out by this attack, put any damage counters not necessary to Knock Out the Defending Pokemon on your opponent's Benched Pokemon in any way you like.",
            ja: "防御ポケモンに8つのダメージカウンターを置きます。この攻撃によってそのポケモンがノックアウトされる場合、相手のベンチ付きポケモンの防御ポケモンを好きなようにノックアウトするために必要ではないダメージカウンターを入れてください。",
            fr: "Mettez 8 compteurs de dégâts sur le Pokémon en défense. Si ce Pokémon était assommé par cette attaque, mettez tous les compteurs de dégâts qui ne sont pas nécessaires pour éliminer le Pokémon en défense sur le Pokémon bancté de votre adversaire comme vous le souhaitez.",
            de: "Legen Sie 8 Schadenszähler auf das verteidigende Pokemon. Wenn dieses Pokémon durch diesen Angriff ausgeschaltet wird, setzen Sie Schadenserzähler nicht notwendig, um das verteidigende Pokémon auf das Bankpokémon Ihres Gegners in irgendeiner Weise herauszuschlagen.",
            es: "Pon 8 contadores de daño en el Pokémon defensor. Si ese Pokémon fuera noqueado por este ataque, ponga los contadores de daño que no sean necesarios para noquear al Pokémon defensor en el Pokémon de banca de tu oponente de cualquier manera que quieras.",
            it: "Metti 8 contatori di danno sul Pokemon in carica. Se quel Pokemon verrebbe eliminato da questo attacco, inserisci eventuali contatori di danno non necessari per eliminare il Pokemon in difesa sul Pokemon in panchina del tuo avversario in un modo che vuoi.",
            pt: "Coloque 8 contadores de danos no Pokémon atual. Se esse Pokémon fosse nocauteado por esse ataque, coloque os contadores de dano não necessários para nocautear o Pokémon atual no Pokémon em banco do seu oponente da maneira que desejar.",
          },
        },
      ],

      retreat: 2,

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
