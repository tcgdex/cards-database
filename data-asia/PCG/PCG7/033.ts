import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Armaldo (Delta Species)",
         ja: "アルマルド（デルタ種）",
         fr: "Armaldo (espèces delta)",
         de: "Armaldo (Delta -Arten)",
         es: "Armaldo (especie delta)",
         it: "Armaldo (Delta Species)",
         pt: "Armaldo (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [348],
      hp: 110,
      types: ["Fighting"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Metal", "Colorless"],
          name: {
            en: "Delta Edge",
            ja: "デルタエッジ",
            fr: "Delta bord",
            de: "Delta Edge",
            es: "Borde delta",
            it: "Delta Edge",
            pt: "Delta Edge",
          },
          effect: {
            en: "If you have any Supporter cards in play, this attack's base damage is 20 instead of 70.",
            ja: "サポーターカードがある場合、この攻撃のベースダメージは70ではなく20です。",
            fr: "Si vous avez des cartes supporteuses en jeu, les dégâts de base de cette attaque sont de 20 au lieu de 70.",
            de: "Wenn Sie Unterstützerkarten im Spiel haben, beträgt der Grundschaden dieses Angriffs 20 anstelle von 70.",
            es: "Si tienes alguna carta de partidario en juego, el daño base de este ataque es 20 en lugar de 70.",
            it: "Se hai delle carte di sostegno in gioco, il danno base di questo attacco è 20 anziché 70.",
            pt: "Se você tiver cartas de apoiadores em jogo, o dano básico desse ataque é de 20 em vez de 70.",
          },
          damage: 70,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Fossil Charge",
            ja: "化石料金",
            fr: "Frais de fossile",
            de: "Fossiliengebühr",
            es: "Carga fósil",
            it: "Accusa fossile",
            pt: "Carga fóssil",
          },
          effect: {
            en: "You may discard a 90, 62, 92, or 86 from your hand. If you do, choose 1 of your opponent's Benched Pokemon and do 30 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "手から90、62、92、または86を捨てることができます。そうする場合は、相手のベンチポケモンの1つを選択し、そのポケモンに30ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Vous pouvez jeter un 90, 62, 92 ou 86 de votre main. Si vous le faites, choisissez un des pokemon bancés de votre adversaire et faites 30 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Sie können eine 90, 62, 92 oder 86 von Ihrer Hand verwerfen. Wenn Sie dies tun, wählen Sie 1 des Pokémon Ihres Gegners und richten Sie 30 Schäden an diesem Pokémon an. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Puede descartar un 90, 62, 92 u 86 de su mano. Si lo hace, elija 1 de los pokemon de banca de su oponente y haga 30 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Puoi scartare un 90, 62, 92 o 86 dalla tua mano. Se lo fai, scegli 1 del Pokemon in panchina del tuo avversario e fai 30 danni a quel Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Você pode descartar um 90, 62, 92 ou 86 da sua mão. Se o fizer, escolha 1 dos Pokémon bancos do seu oponente e causar 30 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 50,
        },
      ],

      retreat: 3,

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
