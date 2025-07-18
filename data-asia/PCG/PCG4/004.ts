import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Meganium",
         ja: "ミーガニウム",
         fr: "Méganium",
         de: "Meganium",
         es: "Meganio",
         it: "Meganium",
         pt: "Meganium",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [154],
      hp: 100,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Healing Aroma",
            ja: "癒しの香り",
            fr: "Arôme de guérison",
            de: "Heilaroma",
            es: "Aroma de curación",
            it: "Aroma di guarigione",
            pt: "Aroma de cura",
          },
          effect: {
            en: "As long as Meganium is your Active PokÃ©mon, remove 1 damage counter from each PokÃ©mon (excluding PokÃ©mon-ex) (both yours and your opponent's) between turns.",
            ja: "MeganiumがアクティブなPokã©Monである限り、各Pokã©Mon（Pokã©Mon-Exを除く）（あなたと対戦相手の両方を除く）から1つのダメージカウンターを削除します。",
            fr: "Tant que Meganium est votre poké actif, supprimez 1 compteur de dégâts de chaque pokã © Mon (à l'exclusion de Pokã © lun-ex) (le vôtre et celui de votre adversaire) entre les virages.",
            de: "Solange Meganium Ihr aktiver Poké Mon Mon ist, entfernen Sie zwischen den Kurven 1 Schadenschalter von jedem Poké Mon (ohne Poké Mon-EX) (sowohl Ihre als auch die Ihres Gegners).",
            es: "Mientras Meganium sea su Poké Mon activo, retire 1 contador de daño de cada Poké Mon (excluyendo Poké Mon-Ex) (tanto el suyo como el de su oponente) entre turnos.",
            it: "Finché il meganium è il tuo poké attivo, rimuovi 1 contatore di danni da ogni poké mon (escluso Poké mon-ex) (sia il tuo che il tuo avversario) tra le curve.",
            pt: "Enquanto o Meganium for o seu Poké de Mon ativo, remova 1 contador de danos de cada Poké Mon (excluindo Poké Mon-Ex) (tanto o seu quanto o do seu oponente) entre as voltas.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
            en: "Bouncy Move",
            ja: "弾力性のある動き",
            fr: "Mouvement gonflable",
            de: "Hüpfwechsel",
            es: "Movimiento hinchable",
            it: "Mossa rimbalzante",
            pt: "Mover saltitante",
          },
          effect: {
            en: "You may put up to 5 damage counters on Meganium. If you do, this attack does 50 damage plus 10 more damage for each damage counter you put on Meganium in this way.",
            ja: "Meganiumに最大5つのダメージカウンターを配置できます。そうした場合、この攻撃は50のダメージと、この方法でMeganiumに置いたダメージカウンターごとに10ダメージをさらに10回かけます。",
            fr: "Vous pouvez mettre jusqu'à 5 compteurs de dégâts sur Meganium. Si vous le faites, cette attaque fait 50 dégâts plus 10 dégâts supplémentaires pour chaque compteur de dégâts que vous mettez sur Meganium de cette manière.",
            de: "Sie können bis zu 5 Schadenszähler auf Meganium legen. Wenn Sie dies tun, verursacht dieser Angriff 50 Schäden plus 10 weitere Schäden für jeden Schadenschalter, den Sie auf diese Weise auf Meganium gestellt haben.",
            es: "Puede poner hasta 5 contadores de daño en Meganium. Si lo haces, este ataque hace 50 daños más 10 más de daño por cada contador de daño que pones en Meganium de esta manera.",
            it: "Puoi mettere fino a 5 contatori di danno su Meganium. Se lo fai, questo attacco infligge 50 danni più 10 danni in più per ogni contatore di danni che meganium in questo modo.",
            pt: "Você pode colocar até 5 contadores de danos no Meganium. Se o fizer, esse ataque causa 50 danos mais 10 mais danos para cada contador de danos que você coloca em meganium dessa maneira.",
          },
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
