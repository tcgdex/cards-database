import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Kabutops",
         ja: "カブトップス",
         fr: "Kabutops",
         de: "Kabutops",
         es: "Kabutops",
         it: "Kabutops",
         pt: "Kabutops",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [141],
      hp: 110,
      types: ["Fighting"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Primal Stare",
            ja: "原始凝視",
            fr: "Regard primordial",
            de: "Urstarren",
            es: "Mirada primaria",
            it: "Lo sguardo primordiale",
            pt: "Stare Primal",
          },
          effect: {
            en: "As long as Kabutops is your Active PokÃ©mon, your opponent can't play any Basic PokÃ©mon or Evolution cards from his or her hand to evolve his or her Active PokÃ©mon.",
            ja: "Kabutopsがあなたのアクティブなポカモンである限り、あなたの対戦相手は、彼または彼女のアクティブなポカモンを進化させるために、彼または彼女の手からの基本的なポカモンまたは進化カードをプレイすることはできません。",
            fr: "Tant que Kabutops est votre poké actif, votre adversaire ne peut pas jouer de cartes de base de Poké ou d'évolution de sa main pour faire évoluer son poké actif.",
            de: "Solange Kabutops Ihr aktiver Pokémon ist, kann Ihr Gegner keine grundlegenden Pokémon- oder Evolutionskarten von seiner Hand spielen, um seine oder ihre aktive Poké Mon Mon zu entwickeln.",
            es: "Mientras Kabutops sea tu Poké Mon activo, tu oponente no puede jugar ninguna carta básica de Poké Mon o evolución de su mano para evolucionar su activo Poké Mon.",
            it: "Fintanto che Kabutops è il tuo poké attivo, il tuo avversario non può giocare alcun poké di base o carte di evoluzione dalla sua mano per evolvere il suo poké attivo.",
            pt: "Enquanto o Kabutops for o seu Poké Mon ativo, seu oponente não pode tocar nenhum Poké Mon ou cartas de evolução de sua mão para evoluir seu Poké Mon ativo.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Luring Antenna",
            ja: "誘惑アンテナ",
            fr: "Antenne attirant",
            de: "Antenne locken",
            es: "Antena de atraer",
            it: "Antenna che attira",
            pt: "Antena atraente",
          },
          effect: {
            en: "Before doing damage, you may choose 1 of your opponent's Benched Pokemon and switch it with 1 of the Defending Pokemon. If you do, this attack does 20 damage to the new Defending Pokemon. Your opponent chooses the Defending Pokemon to switch.",
            ja: "ダメージを与える前に、対戦相手のベンチポケモンの1つを選択し、防御ポケモンの1つで切り替えることができます。もしそうなら、この攻撃は新しい防御ポケモンに20のダメージを与えます。対戦相手は、防御するポケモンを選択して切り替えます。",
            fr: "Avant de faire des dégâts, vous pouvez choisir 1 des pokemon bancés de votre adversaire et le changer avec 1 des Pokémon en défense. Si vous le faites, cette attaque fait 20 dégâts au nouveau Pokémon défendant. Votre adversaire choisit le Pokémon en défense pour changer.",
            de: "Bevor Sie Schaden anrichten, können Sie 1 der Bankpokémon Ihres Gegners auswählen und es mit 1 des verteidigenden Pokémon schalten. Wenn Sie dies tun, verursacht dieser Angriff 20 Schaden für das neue verteidigende Pokemon. Ihr Gegner wählt das verteidigende Pokemon zum Wechseln.",
            es: "Antes de hacer daño, puede elegir 1 de los Pokémon de banca de su oponente y cambiarlo con 1 del Pokémon defensor. Si lo haces, este ataque hace 20 daños al nuevo Pokémon defensor. Tu oponente elige el Pokémon defensor para cambiar.",
            it: "Prima di fare danni, puoi scegliere 1 del Pokemon in panchina del tuo avversario e cambiarlo con 1 dei Pokemon in difesa. Se lo fai, questo attacco infligge 20 danni al nuovo Pokemon in difesa. Il tuo avversario sceglie il Pokemon in carica da cambiare.",
            pt: "Antes de causar danos, você pode escolher 1 dos Pokémon com bancada do seu oponente e trocá -lo com 1 dos Pokémon defensores. Se o fizer, esse ataque causa 20 danos ao novo Pokémon defensivo. Seu oponente escolhe o pokemon defensor para mudar.",
          },
          damage: 20,
        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Blinding Scythe",
            ja: "裂け目",
            fr: "Scythe aveuglant",
            de: "Blendende Sense",
            es: "Guadaña cegadora",
            it: "Bracking Scythe",
            pt: "Cegando foice",
          },
          damage: 60,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
