import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Ursaring",
         ja: "ウルサリング",
         fr: "Ursaring",
         de: "Ursaring",
         es: "Ursaring",
         it: "Ursaring",
         pt: "Ursar",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [217],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Intimidating Ring",
            ja: "威圧的なリング",
            fr: "Bague intimidante",
            de: "Einschüchterndes Ring",
            es: "Anillo intimidante",
            it: "Anello intimidatorio",
            pt: "Anel intimidador",
          },
          effect: {
            en: "As long as Ursaring is your Active PokÃ©mon, your opponent's Basic PokÃ©mon can't attack or use any PokÃ©-Powers.",
            ja: "UrsaringがアクティブなPokã©Monである限り、相手の基本的なPokã©MonはPokã©Powersを攻撃したり使用したりすることはできません。",
            fr: "Tant que Ursaring est votre poké actif, le pokã © mon de base de votre adversaire ne peut pas attaquer ou utiliser des poké-pokers.",
            de: "Solange Ursaring Ihr aktiver Pokémon ist, kann der grundlegende Poké-Mong-Poké-MON keine Poké-Wächter angreifen oder verwenden.",
            es: "Mientras Ursaring sea su Poké Mon activo, el Poké básico de su oponente no puede atacar o usar ninguna potencia de Pok.",
            it: "Finché Ursaring è il tuo poké attivo, il poké di base del tuo avversario non può attaccare o usare alcun poké-powers.",
            pt: "Enquanto o Ursaring for o seu Poké Mon ativo, o Poké Mon do seu oponente não pode atacar ou usar nenhum power-Powers.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Drag Off",
            ja: "ドラッグします",
            fr: "Faire glisser",
            de: "Sich abziehen",
            es: "Retirarse",
            it: "Trascina",
            pt: "Arraste",
          },
          effect: {
            en: "Before doing damage, you may switch 1 of your opponent's Benched Pokemon with the Defending Pokemon. If you do, this attack does 20 damage to the new Defending Pokemon. Your opponent chooses the Defending Pokemon to switch.",
            ja: "ダメージを与える前に、対戦相手のベンチ付きポケモンを防御するポケモンと交換することができます。もしそうなら、この攻撃は新しい防御ポケモンに20のダメージを与えます。対戦相手は、防御するポケモンを選択して切り替えます。",
            fr: "Avant de faire des dégâts, vous pouvez changer 1 des Pokémon bancés de votre adversaire avec le Pokémon en défense. Si vous le faites, cette attaque fait 20 dégâts au nouveau Pokémon défendant. Votre adversaire choisit le Pokémon en défense pour changer.",
            de: "Bevor Sie Schaden anrichten, können Sie 1 des Pokémon Ihres Gegners mit dem verteidigenden Pokémon umschalten. Wenn Sie dies tun, verursacht dieser Angriff 20 Schaden für das neue verteidigende Pokemon. Ihr Gegner wählt das verteidigende Pokemon zum Wechseln.",
            es: "Antes de hacer daño, puede cambiar 1 de los Pokémon de banca de su oponente con el Pokémon defensor. Si lo haces, este ataque hace 20 daños al nuevo Pokémon defensor. Tu oponente elige el Pokémon defensor para cambiar.",
            it: "Prima di fare danni, è possibile cambiare 1 del Pokemon in panchina del tuo avversario con il Pokemon in carica. Se lo fai, questo attacco infligge 20 danni al nuovo Pokemon in difesa. Il tuo avversario sceglie il Pokemon in carica da cambiare.",
            pt: "Antes de causar danos, você pode trocar 1 do Pokémon em bancada do seu oponente com o Pokémon atual. Se o fizer, esse ataque causa 20 danos ao novo Pokémon defensivo. Seu oponente escolhe o pokemon defensor para mudar.",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Rock Smash",
            ja: "ロックスマッシュ",
            fr: "Smash rock",
            de: "Rock Smash",
            es: "Rock smash",
            it: "Rock Smash",
            pt: "Rock Smash",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は40ダメージに加えて20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 40 dégâts plus 20 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 40 Schäden plus 20 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 40 daños más 20 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 40 danni più 20 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 40 danos mais 20 mais danos.",
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
